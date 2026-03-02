// eslint-disable-next-line no-unused-vars
import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';

const HOVER_QUERY = '(hover: hover) and (pointer: fine)';

function shouldUseDefaultNavigation(event) {
    return (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.altKey ||
        event.ctrlKey ||
        event.shiftKey
    );
}

function isMobileDevice() {
    if (typeof navigator === 'undefined') {
        return false;
    }

    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent || '');
}

function openSpotifyAppFirst(event, track) {
    if (shouldUseDefaultNavigation(event)) {
        return;
    }

    if (typeof window === 'undefined') {
        return;
    }

    if (!track.spotifyUri) {
        return;
    }

    // Desktop should always use normal browser link behavior.
    if (!isMobileDevice()) {
        return;
    }

    event.preventDefault();
    window.location.href = track.spotifyUri;
}

function AlbumTile({ track, size, highlighted }) {
    const tileShadow = highlighted
        ? 'shadow-[0_24px_54px_rgba(0,0,0,0.54)]'
        : 'shadow-[0_16px_34px_rgba(0,0,0,0.4)]';

    if (!track.albumImageUrl) {
        return (
            <div
                className={`flex items-center justify-center bg-white/10 text-[#fef9ed] ${tileShadow}`}
                style={{ width: size, height: size }}
            >
                <span className="text-[22px] font-bold lowercase">{track.title.charAt(0) || '?'}</span>
            </div>
        );
    }

    return (
        <div
            className={`overflow-hidden bg-black/20 ${tileShadow}`}
            style={{ width: size, height: size }}
        >
            <img
                src={track.albumImageUrl}
                alt={`${track.title} album cover`}
                className="w-full h-full object-cover"
                loading="lazy"
            />
        </div>
    );
}

export default function TrackOrbitCarousel({
    tracks,
    radiusDesktop = 160,
    radiusMobile = 112,
    duration = 14,
    direction = 1,
    coverDesktop = 116,
    coverMobile = 84,
}) {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [canHover, setCanHover] = useState(() => {
        if (typeof window === 'undefined') {
            return false;
        }

        return window.matchMedia(HOVER_QUERY).matches;
    });
    const rotation = useMotionValue(0);
    const counterRotation = useTransform(rotation, (value) => -value);
    const controlsRef = useRef(null);

    const orbitRadius = canHover ? radiusDesktop : radiusMobile;
    const coverSize = canHover ? coverDesktop : coverMobile;
    const hasMultipleTracks = tracks.length > 1;
    const shouldAnimateOrbit = hasMultipleTracks;
    const isPaused = canHover && hoveredIndex !== null;
    const hoveredTrack = hoveredIndex !== null ? tracks[hoveredIndex] : null;
    const orbitSize = hasMultipleTracks ? orbitRadius * 2 + coverSize * 1.16 : coverSize * 2.2;

    const positionedTracks = useMemo(() => {
        const baseRadius = hasMultipleTracks ? orbitRadius : 0;

        return tracks.map((track, index) => {
            const angle = (index / tracks.length) * 2 * Math.PI;
            return {
                track,
                index,
                x: Math.cos(angle) * baseRadius,
                y: Math.sin(angle) * baseRadius,
            };
        });
    }, [tracks, orbitRadius, hasMultipleTracks]);

    useEffect(() => {
        if (typeof window === 'undefined') {
            return undefined;
        }

        const mediaQuery = window.matchMedia(HOVER_QUERY);
        const syncHoverCapability = () => {
            const nextCanHover = mediaQuery.matches;
            setCanHover(nextCanHover);

            if (!nextCanHover) {
                setHoveredIndex(null);
            }
        };

        if (mediaQuery.addEventListener) {
            mediaQuery.addEventListener('change', syncHoverCapability);
            return () => mediaQuery.removeEventListener('change', syncHoverCapability);
        }

        mediaQuery.addListener(syncHoverCapability);
        return () => mediaQuery.removeListener(syncHoverCapability);
    }, []);

    useEffect(() => {
        controlsRef.current?.stop();
        controlsRef.current = null;
        rotation.set(0);

        if (!shouldAnimateOrbit) {
            return undefined;
        }

        controlsRef.current = animate(rotation, direction * 360, {
            duration,
            repeat: Infinity,
            ease: 'linear',
        });

        return () => controlsRef.current?.stop();
    }, [shouldAnimateOrbit, direction, duration, rotation]);

    useEffect(() => {
        if (!controlsRef.current || !shouldAnimateOrbit) {
            return;
        }

        if (isPaused) {
            controlsRef.current.pause();
            return;
        }

        controlsRef.current.play();
    }, [isPaused, shouldAnimateOrbit]);

    if (!tracks.length) {
        return null;
    }

    return (
        <div className="relative flex w-full items-center justify-center py-1">
            <div className="relative flex items-center justify-center" style={{ width: orbitSize, height: orbitSize }}>
                <motion.div className="relative w-full h-full" style={{ rotate: rotation }}>
                    {positionedTracks.map(({ track, index, x, y }) => {
                        const isHovered = hoveredIndex === index;
                        const scale = isPaused ? (isHovered ? 1.08 : 1) : 1;
                        const opacity = isPaused ? (isHovered ? 1 : 0.76) : 1;

                        return (
                            <motion.div
                                key={`${track.songUrl}-${index}`}
                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                                style={{ x, y }}
                                animate={{
                                    scale,
                                    opacity,
                                    zIndex: isHovered ? 50 : 20,
                                }}
                                transition={{ type: 'spring', stiffness: 420, damping: 30 }}
                                onMouseEnter={canHover ? () => setHoveredIndex(index) : undefined}
                                onMouseLeave={canHover ? () => setHoveredIndex(null) : undefined}
                            >
                                <motion.div style={{ rotate: hasMultipleTracks ? counterRotation : 0 }}>
                                    <a
                                        href={track.songUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(event) => openSpotifyAppFirst(event, track)}
                                        aria-label={`Open ${track.title} by ${track.artist} on Spotify`}
                                        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1DB954] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                                    >
                                        <AlbumTile track={track} size={coverSize} highlighted={isHovered && isPaused} />
                                    </a>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {canHover && hoveredTrack && (
                    <motion.div
                        key={hoveredTrack.songUrl}
                        initial={{ opacity: 0, scale: 0.94 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40 max-w-[220px] px-3 py-2 bg-black/60 backdrop-blur-sm text-center"
                    >
                        <p className="m-0 text-[12px] md:text-[13px] text-[#fef9ed] lowercase truncate">{hoveredTrack.title}</p>
                    </motion.div>
                )}
            </div>
        </div>
    );
}

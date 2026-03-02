import { useEffect, useState } from 'react';
import TrackOrbitCarousel from './TrackOrbitCarousel';

function normalizeTracks(rawTracks) {
    if (!Array.isArray(rawTracks)) {
        return [];
    }

    return rawTracks
        .slice(0, 8)
        .filter((track) => track && track.songUrl && track.title && track.artist)
        .map((track) => ({
            title: String(track.title),
            artist: String(track.artist),
            songUrl: String(track.songUrl),
            spotifyUri: track.spotifyUri ? String(track.spotifyUri) : null,
            albumImageUrl: track.albumImageUrl ? String(track.albumImageUrl) : null,
        }));
}

export default function TopTracks() {
    const [tracks, setTracks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchTopTracks() {
            try {
                const response = await fetch('/api/spotify');
                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data?.error || 'Failed to load Spotify tracks');
                }

                setTracks(normalizeTracks(data?.tracks));
            } catch (e) {
                console.error('Error loading Spotify tracks:', e);
                setTracks([]);
            } finally {
                setLoading(false);
            }
        }

        fetchTopTracks();
    }, []);

    if (loading) {
        return (
            <div className="flex flex-col items-center gap-4 mt-8 w-full max-w-[520px] animate-pulse">
                <p className="m-0 italic lowercase text-[14px] opacity-70">loading tracks...</p>
                <div className="grid grid-cols-4 gap-3">
                    <div className="h-16 w-16 bg-white/15" />
                    <div className="h-16 w-16 bg-white/10" />
                    <div className="h-16 w-16 bg-white/15" />
                    <div className="h-16 w-16 bg-white/10" />
                </div>
            </div>
        );
    }

    if (tracks.length === 0) {
        return null;
    }

    return (
        <div className="w-full max-w-[560px] mx-auto flex flex-col items-center gap-4">
            <p className="m-0 text-[12px] md:text-[14px] tracking-[0.08em] text-[#fef9ed]/80 lowercase text-center">
                my recent top played songs
            </p>
            <TrackOrbitCarousel tracks={tracks} />
        </div>
    );
}

import { useEffect, useState } from 'react';

export default function TopTracks() {
    const [tracks, setTracks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchTopTracks() {
            try {
                const response = await fetch('/api/spotify');
                const data = await response.json();

                if (data.tracks) {
                    setTracks(data.tracks);
                }
            } catch (e) {
                console.error('Error loading Spotify tracks:', e);
            } finally {
                setLoading(false);
            }
        }

        fetchTopTracks();
    }, []);

    if (loading) {
        return (
            <div className="flex flex-col gap-3 mt-8 animate-pulse text-[14px] opacity-50">
                <p className="m-0 italic lowercase">loading recently played...</p>
                <div className="h-10 w-full bg-black/5 rounded-md"></div>
                <div className="h-10 w-full bg-black/5 rounded-md"></div>
                <div className="h-10 w-full bg-black/5 rounded-md"></div>
            </div>
        );
    }

    if (tracks.length === 0) {
        return null;
    }

    return (
        <div className="flex flex-col gap-4 max-w-[320px]">
            <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#1DB954]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.84.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.72 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
                <p className="m-0 text-[14px] font-bold italic opacity-80 lowercase">on repeat</p>
            </div>

            <div className="flex flex-col gap-3">
                {tracks.map((track, index) => (
                    <a
                        key={index}
                        href={track.songUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 group hover:bg-black/5 p-2 -ml-2 rounded-lg transition-colors cursor-pointer"
                    >
                        <img
                            src={track.albumImageUrl}
                            alt={track.title}
                            className="w-10 h-10 object-cover rounded shadow-sm group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="flex flex-col overflow-hidden">
                            <span className="text-[14px] font-bold text-[#5d524b] truncate transition-colors lowercase">{track.title}</span>
                            <span className="text-[12px] text-[#5d524b]/70 truncate lowercase">{track.artist}</span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

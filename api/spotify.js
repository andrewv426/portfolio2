export default async function handler(req, res) {
    const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } = process.env;

    if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET || !SPOTIFY_REFRESH_TOKEN) {
        return res.status(500).json({ error: 'Missing Spotify credentials in environment variables.' });
    }

    const basicAuth = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64');
    const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
    const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?limit=5&time_range=short_term`;

    try {
        // 1. Get an access token using the refresh token
        const tokenResponse = await fetch(TOKEN_ENDPOINT, {
            method: 'POST',
            headers: {
                Authorization: `Basic ${basicAuth}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                grant_type: 'refresh_token',
                refresh_token: SPOTIFY_REFRESH_TOKEN,
            }),
        });

        const tokenData = await tokenResponse.json();

        if (!tokenResponse.ok) {
            console.error('Spotify token error:', tokenData);
            return res.status(tokenResponse.status).json({ error: 'Failed to retrieve access token form Spotify.' });
        }

        const { access_token } = tokenData;

        // 2. Fetch the top tracks from Spotify
        const tracksResponse = await fetch(TOP_TRACKS_ENDPOINT, {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });

        const tracksData = await tracksResponse.json();

        if (!tracksResponse.ok) {
            console.error('Spotify tracks error:', tracksData);
            return res.status(tracksResponse.status).json({ error: 'Failed to retrieve top tracks from Spotify.' });
        }

        // 3. Map the enormous Spotify payload down to just what we need for the UI
        const tracks = tracksData.items.map((track) => ({
            title: track.name,
            artist: track.artists.map((_artist) => _artist.name).join(', '),
            songUrl: track.external_urls.spotify,
            albumImageUrl: track.album.images[0]?.url, // [0] is the largest res, we can css size it
        }));

        // Add strong caching headers (cache data for 2 hours)
        res.setHeader('Cache-Control', 'public, s-maxage=7200, stale-while-revalidate=3600');
        return res.status(200).json({ tracks });

    } catch (error) {
        console.error('Server error fetching Spotify data:', error);
        return res.status(500).json({ error: 'Failed to fetch Spotify data.' });
    }
}

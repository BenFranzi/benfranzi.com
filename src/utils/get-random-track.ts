import topTracks from "@/config/top-tracks.json";

export default function getRandomTrack() {
    const now = new Date();

    const item: any = topTracks.items[Math.floor(now.getDay() * now.getFullYear() * (now.getMonth() + 1) % topTracks.items.length)];
    const {album, artists, name: song, preview_url: previewAudio} = item;
    const [{url: cover}] = album.images;

    return {
        cover,
        album: album.name,
        artists: artists.reduce((acc: string, {name}: { name: string }) => acc ? `${acc}, ${name}` : name, ''),
        song,
        previewAudio,
    }
}

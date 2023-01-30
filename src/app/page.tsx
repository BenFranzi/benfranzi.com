import SongShowcase from "@/components/song-showcase";
import topTracks from '@/config/top-tracks.json';

function getRandomTrack() {
  const now = new Date();

  const item: any = topTracks.items[Math.floor(now.getDay() * now.getFullYear() * (now.getMonth() + 1) % topTracks.items.length)];
  const {album, artists, name: song, preview_url: previewAudio } = item;
  const [{ url: cover }] = album.images;

  return {
    cover,
    album: album.name,
    artists: artists.reduce((acc: string, { name } : { name: string }) => acc ? `${acc}, ${name}`: name, ''),
    song,
    previewAudio,
  }
}


async function getDailySong() {
  const res = await fetch('http://localhost:3000/api/get-daily-song', {
    method: 'GET',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data, problem should handle that');
  }

  return res.json();
}

export default async function Home() {
  const data = getRandomTrack();

  return (
    <SongShowcase {...data} />
  )
}

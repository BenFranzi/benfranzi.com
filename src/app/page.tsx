import SongShowcase from "@/components/song-showcase";
import getRandomTrack from "@/utils/get-random-track";

export const revalidate = 21600;

export default async function Home() {
    const data = getRandomTrack();

    return (
        <SongShowcase {...data} />
    )
}

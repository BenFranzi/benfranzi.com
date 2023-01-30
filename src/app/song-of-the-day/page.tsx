import SongShowcase from "@/components/song-showcase";
import getRandomTrack from "@/utils/get-random-track";



export default async function Home() {
    const data = getRandomTrack();

    return (
        <SongShowcase {...data} />
    )
}

import getRandomTrack from "@/utils/get-random-track";

export default function Head() {
    const data = getRandomTrack();

    return (
        <>
            <title>{`Ben Franzi - 📀${data.song} - ${data.artists}`}</title>
            <meta property="og:title" content={`📀: ${data.song} - ${data.artists}`} />
            <meta property="og:description" content={`${data.song} - ${data.artists}`} />
            <meta property="description" content={`${data.song} - ${data.artists}`} />
            <meta property="og:image" content={data.cover} />
            <meta content="width=device-width, initial-scale=1" name="viewport"/>
            <link rel="icon" href="/favicon.ico"/>
        </>
    )
}

import { Space_Grotesk } from "next/font/google";
import Header from "./components/Header";
import Fold from "@/app/(home)/components/Fold";
import Status from "@/app/(home)/components/Status";

export const metadata = {
    title: 'Ben Franzi ✌️',
}

export default function Home() {
    return (
        <main>
            <Header pathname="/" />
            <Fold />
            <Status />
        </main>
    )
}
import styles from './styles.module.css';
import {Space_Grotesk} from "next/font/google";
import Link from "next/link";


const styledFont = Space_Grotesk({ subsets: ['latin']});

function Phrase() {
    return (
        <>
            <p className={`${styledFont.className} text-4xl font-bold`}>Let&apos;s work together</p>
            <p className="text-4xl">✌️</p>
        </>
    )
}

export default function Banner() {
    return (
        <Link href={'/contact'}>
            <div className={styles.banner}>
                <div className={styles.marquee}>
                    { Array.from({ length: 10 }).map((_, index) => <Phrase key={index} />) }
                </div>
            </div>
        </Link>
    );
}
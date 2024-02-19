import Link from "next/link";
import styles from './styles.module.css';

export default function Frame() {
    return (
        <div className={styles.main}>
            <div className={styles.frame}>
                <div className={styles.frameContent}>
                    <h1>Software</h1>
                    <h1>Engineer</h1>
                    <p>
                        Hi, I&apos;m Ben! a software engineer who is passionate about helping people use tech for good. From
                        social
                        media platforms to superannuation managements app I&apos;ve got a diverse range of domain knowledge.
                        Currently working at <Link href="https://endava.com/" passHref>Endava↗</Link>.
                    </p>
                </div>
            </div>
        </div>
    )
}
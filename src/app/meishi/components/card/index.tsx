import Image from 'next/image';
import siteMetadata from "@/data/siteMetadata";
import Link from "next/link";
import styles from './styles.module.css';
import {Space_Grotesk} from "next/font/google";

const styledFont = Space_Grotesk({ subsets: ['latin']});


const skills = "Languages: Javascript, Typescript, Java, C++ Frameworks and Databases: React, Next.js, Vue, Nest.js, Spring Framework, Redis, MongoDB, PostgreSQL, Webpack, Vite, Rollup, Testing Tools: Docker, AWS (EC2, VPNCloudfront, Lambda, Cognito, SNS, Bitbucket pipelines), Jenkins";

export default function Card() {
    return (
        <div className={`${styles.card} ${styledFont.className}`}>
            <div className={styles.top}>
                <h1 className={styles.title}>{'Ben\nFranzi'}</h1>
                <div className={styles.role}><h3>software engineer</h3></div>
            </div>
            <div className={styles.middle}>
                <Image className={styles.picture} src="/status-me.png" width={122} height={122} alt={"Photo of Ben Franzi"} />
                <div className={styles.skills}>
                    <p>{skills}</p>
                    <p aria-hidden>{skills}</p>
                    <p aria-hidden>{skills}</p>
                    <p aria-hidden>{skills}</p>
                    <p aria-hidden>{skills}</p>
                </div>
            </div>
            <div className={styles.divider} />
            <div className={styles.socials}>
                {siteMetadata.meishi
                    .map((key) => siteMetadata.external[key])
                    .map(({url, icon, label, cosmeticUrl}) => (
                        <Link
                            aria-label={`${label}`}
                            href={url}
                            key={label}
                            passHref
                            target="_blank">
                            <Image src={icon} height={24} width={24} alt={`${label} logo`}/><span>{cosmeticUrl}</span>
                        </Link>
                    ))}
            </div>
        </div>
    )
}
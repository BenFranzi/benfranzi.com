'use client'

import { Space_Grotesk } from "next/font/google";
import styles from './styles.module.css';
import Image from 'next/image';
import {useEffect, useMemo, useState} from "react";
import {ArrowSvg} from "@/assets/inlineSvgs";
import Link from "next/link";
import siteMetadata from "@/data/siteMetadata";
import {animationInterval} from "@/utilities/animationInterval";
const styledFont = Space_Grotesk({ subsets: ['latin']});

const activities = [
    'Building rockets',
];

function getActivity(time: Date) {
    const hour = time.getHours();

    const emoji = hour < 6 || hour > 22 ? '🌙'
        : hour > 8 && hour < 6 ? '👨‍💻'
        : '🚀';

    const label = activities.at(0);

    return {emoji, label};
}

export default function StatusPill() {
    const [time, setTime] = useState(new Date());
    const formattedTime = useMemo(() => time.toLocaleTimeString([], { hour: '2-digit', minute:'2-digit', hour12: true }), [time]);
    const activity = useMemo(() => getActivity(time), [time]);

    useEffect(() => {
        const controller = new AbortController();

        animationInterval(1000, controller.signal, () => {
            setTime(new Date());
        });

        return () => controller.abort();
    }, []);

    return (
        <Link href={siteMetadata.external.linkedin.url} passHref>
            <div className={`${styledFont.className} ${styles.statusPill}`}>
                <div className={styles.profilePicture}>
                    <Image src="/status-me.png" width={64}  height={64} alt="Ben's profile picture" />
                </div>
                <div className={styles.copy}>
                    <span className={styles.time} suppressHydrationWarning>{formattedTime}</span>
                    <div className={styles.activity}>
                        <span>{activity.emoji}</span>
                        <span>{activity.label}</span>
                    </div>
                </div>
                <div className={styles.cta}>
                    <ArrowSvg />
                </div>
            </div>
        </Link>
    )
}
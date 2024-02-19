'use client';

import { Space_Grotesk } from "next/font/google";
import styles from './styles.module.css';
import Image from 'next/image';
import {useEffect, useMemo, useState} from "react";
import {ArrowSvg} from "@/assets/inlineSvgs";
const styledFont = Space_Grotesk({ subsets: ['latin']});

function getActivity(date: Date) {
    return { emoji: '🚀', label: 'hobby time' };
}

export default function StatusPill() {
    const [time, setTime] = useState(new Date());
    const formattedTime = useMemo(() => time.toLocaleTimeString('en-AU'), [time]);
    const activity = useMemo(() => getActivity(time), [time]);

    return (
        <div className={`${styledFont.className} ${styles.statusPill}`}>
            <div className={styles.profilePicture}>
                <Image src="/status-me.png" width={64}  height={64} alt="Ben's profile picture" />
            </div>
            <div className={styles.copy}>
                <span className={styles.time}>{formattedTime}</span>
                <div className={styles.activity}>
                    <span>{activity.emoji}</span>
                    <span>{activity.label}</span>
                </div>
            </div>
            <div className={styles.cta}>
                <ArrowSvg />
            </div>
        </div>
    )
}
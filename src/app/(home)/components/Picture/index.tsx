import Image from "next/image";
import styles from './styles.module.css';

export default function Picture() {
    return (
        <div>
            <div className={styles.picture}>
                <div className={styles.flower}>
                    <Image
                        src="/aesthetics/flower.svg"
                        height={260}
                        width={260}
                        alt={"decorative flower"}
                    />
                </div>
                <Image
                    src="/me.png"
                    priority
                    height={538}
                    width={348}
                    alt="Picture of Ben"
                />
            </div>
        </div>
    );
}
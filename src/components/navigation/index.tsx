import Link from 'next/link'
import styles from './styles.module.css';


export default function Navigation() {
    return (
        <div className={styles.main}>
            <div className={styles.content}>
                <Link href="/">
                    <h2 className={styles.title}>🔥</h2>
                </Link>
            </div>
        </div>
    )
}

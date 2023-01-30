import styles from './styles.module.css';

const defaultLang = {
    title: 'Song of the Day',
    songLabel: 'song:',
    albumLabel: 'album:',
    artistLabel: 'artist:',
}

interface SongShowcase {
    lang?: {
      title: string;
      songLabel: string;
      albumLabel: string;
      artistLabel: string;
    };
    song: string;
    album: string;
    artists: string;
    cover: string;
    previewAudio: string;
}

export default function SongShowcase({ lang = defaultLang, song, album, artists, cover, previewAudio }: SongShowcase) {
    const list = [
        { label: lang.songLabel, value: song },
        { label: lang.albumLabel, value: album },
        { label: lang.artistLabel, value: artists },
    ];

    return (
        <div className={styles.main}>
            <div className={styles.content}>
                <div className={styles.meta}>
                    <div className={styles.metaInner}>
                        <h2 className={styles.title}>{lang.title}</h2>
                        <ul>
                            {list.map(({ label, value }) => (
                                <li key={label}>
                                    <div className={styles.label}>{label}</div>
                                    <div className={styles.value}>{value}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={styles.hero}>
                    <img src={cover} alt={album} />
                </div>
            </div>
        </div>
    )
}

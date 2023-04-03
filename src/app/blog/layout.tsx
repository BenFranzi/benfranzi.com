import styles from "./blog.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className={styles.blog}>{children}</div>;
}

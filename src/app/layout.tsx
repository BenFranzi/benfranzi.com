import './globals.css'
import Navigation from "@/components/navigation";
import styles from './layout.module.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={styles.layout}>
        <Navigation />
        <main className={styles.main}>
            {children}
        </main>
      </body>
    </html>
  )
}

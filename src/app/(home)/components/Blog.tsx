import Link from "next/link";
import siteMetadata from "@/data/siteMetadata";
import {Space_Grotesk} from "next/font/google";

const styledFont = Space_Grotesk({ subsets: ['latin']});


export default function Blog() {
    return (
        <div className="text-center py-28 flex flex-col">
            <h2 className={`${styledFont.className} text-5xl`}>See my blog</h2>
            <p className="pt-4">take a look at the projects I’ve worked on recently and see what’s coming along.</p>
            <Link
                href={siteMetadata.external.bengineerDev.url}
                passHref
                className={`${styledFont.className} pt-8 font-bold text-accent-status hover:underline`}
            >
                to bengineer.dev ↗
            </Link>
        </div>
    )
}
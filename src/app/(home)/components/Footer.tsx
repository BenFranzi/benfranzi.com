import {Space_Grotesk} from "next/font/google";
import NavLinks from "@/app/(home)/components/NavLinks";
import siteMetadata from "@/data/siteMetadata";
import Link from "next/link";
import Image from 'next/image';

const styledFont = Space_Grotesk({subsets: ['latin']});
const YEAR = (new Date()).getFullYear();


export default function Footer() {
    return (
        <div className="mx-auto max-w-screen-2xl px-4 py-16">
            <div className="flex flex-col xl:flex-row items-center justify-between">
                <span className={styledFont.className}>© Copyright {YEAR} by Ben Franzi</span>
                <div className="hidden xl:block"><NavLinks/></div>
                <div className="flex gap-4 items-center">
                    {siteMetadata.footerIcons
                        .map((key) => siteMetadata.external[key])
                        .map(({url, icon, label}) => (
                            <Link
                                aria-label={`${label} site`}
                                href={url}
                                key={label}
                                target="_blank"
                                className="hover:bg-highlight transition-colors flex justify-center items-center h-12 aspect-square">
                                <Image src={icon} height={24} width={24} alt={`${label} logo`}/>
                            </Link>
                        ))}
                </div>
            </div>
        </div>
    )
}
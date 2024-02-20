import {Space_Grotesk} from "next/font/google";
import Link from "next/link";
import headerNavLinks from "@/data/headerNavLinks";
import siteMetadata from "@/data/siteMetadata";
import {ArrowSvg} from "@/assets/inlineSvgs";
import NavLinks from "@/app/(home)/components/NavLinks";

const styledFont = Space_Grotesk({subsets: ['latin']});

type Props = {
    pathname: string;
}

export default function Header({pathname}: Props) {
    return (
        <>
            <Link href="/">
                <div className="text-lg text-center font-bold text-primary">
                    <h1 className={styledFont.className}>BEN FRANZI</h1>
                </div>
            </Link>
            <div className="sticky top-0 bg-secondary bg-opacity-80 backdrop-blur-3xl z-50">
                <div className="h-24 font-bold border-y-4 border-black flex justify-between sticky top-px28">
                    <div className="flex items-center">
                        <div className="hidden sm:block">
                            <div className="pl-12">
                                <NavLinks/>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <Link href={siteMetadata.external.bengineerDev.url} passHref className={`${styledFont.className}`} target="_blank">
                            <div
                                className="text-center border-l-4 border-black h-full hover:underline px-8 flex flex-col justify-center text-primary">
                                <span className="block font-bold">bengineer.dev ↗</span>
                                <span className="block opacity-50">(blog)</span>
                            </div>
                        </Link>
                        <Link href={siteMetadata.external.linkedin.url} className={`${styledFont.className}`} target="_blank">
                            <div className="group h-full px-8 bg-primary text-secondary flex gap-4 justify-center">
                                <div className="flex items-center">
                                    <div
                                        className="rounded-circle bg-accent-secondary h-12 aspect-square flex items-center justify-center">
                                        <ArrowSvg/>
                                    </div>
                                </div>
                                <div className="text-center flex items-center">
                                    <span className="block font-bold b">lets chat</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
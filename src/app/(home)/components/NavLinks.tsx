'use client';

import headerNavLinks from "@/data/headerNavLinks";
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function NavLinks() {
    const pathname = usePathname();

    return (
        <ul className="flex gap-12 h-full items-center">
            {
                headerNavLinks.map(({title, href}) => (
                    <li key={href}>
                        <Link href={href} className="text-primary hover:underline">
                            <span className={pathname === href ? 'font-bold' : 'font-normal'}>{title}</span>
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}
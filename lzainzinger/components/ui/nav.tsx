"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name:"home",
        path: "/"
    },
    {
        name:"projects",
        path: "/projects"
    },
    {
        name:"photos",
        path: "/photography"
    },
    {
        name:"resume",
        path: "/resume"
    },
    {
        name:"contact",
        path: "mailto:lukas@lzainzinger.com"
    },
]

export const Nav = () => {
    const pathname = usePathname();

    return(
        <nav className="flex gap-8 ">
            {links.map((link, index) => {
                return(
                    <Link href={link.path} key={index} className={`${
                        link.path  === pathname && "text-cyan-600 border-b-4 font-bold border-cyan-600"} 
                        font-medium hover:text-cyan-600 transition-all`}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
}
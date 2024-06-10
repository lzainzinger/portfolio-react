"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

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

export const MobileNav = () => {
    const pathname = usePathname();

    return(
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-cyan-600 " />
            </SheetTrigger>
            <SheetContent className="flex flex-col text-white">
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            lzainzinger <span className="text-cyan-600">.</span>
                        </h1>
                    </Link>
                </div>
                <nav className="flex flex-col justify-center items-center gap-8">
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
            </SheetContent>
        </Sheet>
    );
}
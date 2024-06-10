import Link from "next/link";
import { Nav } from "@/components/ui/nav";
import { MobileNav } from "@/components/ui/mobile_nav";
//import { Button } from "@/components/ui/button"

export const Header = () => {
    return (
        <header className="py-8 xl:py-12 px-2 text-white bg-teal-500">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        lzainzinger <span className="text-cyan-600">.</span>
                    </h1>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                </div>

                {/* Mobile Nav */}
                <div className="xl:hidden">
                    <MobileNav></MobileNav>
                </div>
                
            </div>
        </header>
    );
}
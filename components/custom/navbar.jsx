import Link from "next/link";
import ScrollProgress from "@/components/ui/scroll-progress";

export default function Navbar(){

    return (
        <div className={`nav p-5 py-8 w-full flex font-saumyaSans text-white`}>
            <div className="hidden md:block">
                <p className="ml-5">Saumya Talwani</p>
            </div>
            <div className="flex-grow"></div>
            <div className="links">
                <Link href="#about">About</Link>
                <Link href="#projects">Projects</Link>
                <Link href="#contact">Contact</Link>
            {/*
                <Link href="https://blog.techsaumya.in/">Blog</Link>
                
            */}
                <ScrollProgress />
            </div>
        </div>
    )
}
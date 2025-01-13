import Link from "next/link";
import ScrollProgress from "@/components/ui/scroll-progress";

export default function Navbar({ className }){

    return (
        <div className={`nav p-5 py-7 md:py-8 w-full flex font-saumyaSans ${className}`}>
            <div className="">
                <Link href={"/"} className="ml-5">Saumya Talwani</Link>
            </div>
            <div className="flex-grow"></div>
            <div className="links">
                <Link href="/work">Work</Link>
                <Link href="/about">About</Link>
                {/*<Link href="/contact">Contact</Link>*/}
                <Link href="https://blog.techsaumya.in/" target="_blank">Blog</Link>
                <ScrollProgress />
            </div>
        </div>
    )
}
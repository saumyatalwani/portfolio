import Navbar from "@/components/custom/navbar"
import { GlobeIcon } from "@primer/octicons-react"
import Image from "next/image"

export default function About(){
    return (
        <>
        <Navbar />
        <div className="pt-[15vh] pl-[9vw] md:pl-[18vw] mb-20">
            <h1 className="font-saumyaSans font-[450] mb-[14vh] about-heading md:max-w-[60vw]">Helping brands thrive
            in the digital world</h1>

            <div>
                <hr className="w-[80vw] md:w-[72vw] mt-8"/>
                <div className="btn-round bg-[#455ce9] hover:bg-[#334bd3] rounded-full flex items-center justify-center text-white font-noto mt-[-80px] md:mt-[-90px] ml-auto mr-[14vw] md:mr-[16vw]">
                    <GlobeIcon className="size-20"/>
                </div>
            </div>

            <div className="flex mt-10 flex-col md:flex-row">

            <div className="md:w-[20vw] mr-[10vw] text-justify">
                <h2 className="font-saumyaSans">I help companies from all over the world with tailor-made solutions. With each project, I push my work to new horizons, always putting quality first.</h2>
            </div>
            <div className="w-[80vw] mt-10 md:mt-0 md:w-[40vw]">
                <Image src="/saumya_1.png" alt="Saumya Talwani" height={400} width={400}/>
            </div>

            </div>

        </div>
        </>
    )
}
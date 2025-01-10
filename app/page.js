'use client';

import Image from "next/image";
import Navbar from "@/components/custom/navbar";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  var [show,setShow]=useState(false);
  var [show1,setShow1]=useState(false);
  var [show2,setShow2]=useState(false);

  return (
    <>
    <div id="hero"
    className="bg-[#999d9e] h-screen" 
    >
      <Navbar />
      <div className="flex w-screen justify-center items-center">
        <Image src='/saumya.png' width={200} height={200} className="h-[80vh] md:h-[95vh] w-auto absolute bottom-0" alt="Saumya Talwani"/>
        <div className="absolute bottom-5 left-10 md:bottom-auto md:static md:mt-40 md:ml-[60vw]">
          <div className="arrow big">
            <svg width="16px" height="16px" viewBox="0 0 14 14" version="1.1">
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Artboard" transform="translate(-1019.000000, -279.000000)" stroke="#FFFFFF" strokeWidth="1.5">
                        <g id="arrow-up-right" transform="translate(1026.000000, 286.000000) rotate(90.000000) translate(-1026.000000, -286.000000) translate(1020.000000, 280.000000)">
                            <polyline id="Path" points="2.76923077 0 12 0 12 9.23076923"></polyline>
                            <line x1="12" y1="0" x2="0" y2="12" id="Path"></line>
                        </g>
                    </g>
                </g>
            </svg>
          </div>
          <h4 className="designation mt-5 md:mt-20 font-saumyaSans font-normal">Freelance<br/>Developer & Designer</h4>
        </div>
      </div>
      <div className="absolute bottom-0 mb-[8rem]">
        <VelocityScroll numRows={1} className="text-white font-saumyaSans font-normal" defaultVelocity={2}>Saumya Talwani &mdash; </VelocityScroll>
      </div>
      
    </div>
    
    <div id="about"
    className="p-10 md:flex w-full mt-[5vh] md:mt-[20vh] md:ml-[10vw]"
    >
      <div className="md:max-w-[47vw]">
        <h1 className="font-noto text-s font-[350] text-[#1c1d20]">Empowering MSMEs to thrive in the digital era. Together, we’ll redefine success and set a new standard—no fluff, just cutting-edge solutions that deliver.</h1>
      </div>

      <div className="font-noto flex mt-[10vh] md:mt-0 md:ml-20 md:block md:max-w-[20vw]">
        <p className="mb-5 max-w-[50vw] mr-5 md:max-w-none md:mr-0">The combination of my passion for design, code & interaction positions me in a unique place in the web design world.</p>
        <div className="btn-round bg-[#1c1d20] hover:bg-[#455ce9] rounded-full flex items-center justify-center text-white">
          About me
        </div>
      </div>

      <div>

      </div>
      
    </div>

    <div id="recentWorksDesktop" className="p-10 hidden md:block">
      <div>
        <h1 className="ml-[15vw] text-[0.6em] text-[#1c1d20] font-noto opacity-50">RECENT WORK</h1>

        <div className="flex justify-center items-center flex-col" onMouseEnter={()=>{setShow(true)}} onMouseLeave={()=>{setShow(false)}}>
          <hr className="w-[80vw] text-[#1c1d20] mt-8"/><br/>
          <div className="w-[80vw] flex items-center justify-center px-10 py-10">
            <h1 className="text-6xl font-saumyaSans font-medium">SolSynk.</h1>
            <h2 className="font-noto font-light ml-auto">Design & Development</h2>
          </div>

          {
            show ?
            <div className="px-10 py-10 w-[80vw] flex items-center justify-center font-saumyaSans font-normal">
            <div>
              <p className="max-w-[40vw] text-justify">
              Developed and deployed a comprehensive ERP web application
tailored for Solar EPC firms participating in the PM Surya Ghar program. The app streamlined operations by integrating
project management, financial tracking, inventory management and billing. Collaborated closely with stakeholders to ensure
the platform met industry-specific requirements, enhancing efficiency for solar energy projects. 
              </p>
              <p className="mt-2"><span className="font-semibold italic">Tech Stack : </span>  Next.js, Prisma, Postgres, ShadCN</p>
              </div>
              <Image src='/solsynk_dashboard.png' height={2000} width={2000} className="w-[40vw] ml-10 border-2" alt='SolSynk. Dashboard'></Image>
            </div> : null
          }
        </div>

        <div className="flex justify-center items-center flex-col" onMouseEnter={()=>{setShow1(true)}} onMouseLeave={()=>{setShow1(false)}}>
          <hr className="w-[80vw] text-[#1c1d20] mt-8"/><br/>
          <div className="w-[80vw] flex items-center justify-center px-10 py-10">
            <h1 className="text-6xl font-saumyaSans font-medium">BookMyHostel</h1>
            <h2 className="font-noto font-light ml-auto">Design & Development</h2>
          </div>
            {
            show1 ?
            <div className="px-10 py-10 w-[80vw] flex items-center justify-center font-saumyaSans font-normal">
            <div>
              <p className="max-w-[40vw] text-justify">
                BookMyHostel is a dynamic web application designed to simplify the hostel booking process for students.
                <br/><br/>
                Students can browse available hostels, select specific blocks, and view real-time updates on room availability.  
                <br/><br/>
                For authorities, BookMyHostel offers efficient tools to manage room allocations, maintenance requests, and hostel ID forms. This comprehensive solution bridges the gap between students and hostel management, making the process intuitive and hassle-free.  
              </p>
              <p className="mt-2"><span className="font-semibold italic">Tech Stack : </span>  React.js, Axios, PHP, MySQL, ShadCN</p><br/>
              <Link href={'https://github.com/saumyatalwani/hostel-allotment-frontend'} className="underline font-mono" target="_blank">Frontend Repository</Link><br/>
              <Link href={'https://github.com/saumyatalwani/hostel-allotment-backend'} className="underline font-mono" target="_blank">Backend Repository</Link>
              </div>
              <Image src='/BookMyHostel_select.png' height={2000} width={2000} className="w-[40vw] ml-10 border-2" alt='Room Selection Page (Book My Hostel)'></Image>
            </div> : null
          }

          
        </div>

        <div className="flex justify-center items-center flex-col"  onMouseEnter={()=>{setShow2(true)}} onMouseLeave={()=>{setShow2(false)}}>
          <hr className="w-[80vw] text-[#1c1d20] mt-8"/><br/>
          <div className="w-[80vw] flex items-center justify-center px-10 py-10">
            <h1 className="text-6xl font-saumyaSans font-medium">DocBlock</h1>
            <h2 className="font-noto font-light ml-auto">Frontend Design & Development</h2>
          </div>
            {
            show2 ?
            <div className="px-10 py-10 w-[80vw] flex items-center justify-center font-saumyaSans font-normal">
            <div>
              <p className="max-w-[40vw] text-justify">
              Developed a robust frontend application using React.js, seamlessly integrating it with Django and Node.js blockchain APIs (created by other teammates) to deliver a cutting-edge solution for the SIH Hackathon.
              </p>
              <p className="mt-2"><span className="font-semibold italic">Tech Stack : </span>  React.js, Axios</p><br/>
              <Link href={'https://github.com/saumyatalwani/sih-frontend'} className="underline font-mono" target="_blank">GitHub Repository</Link>
              </div>
              <Image src='/docblock_home.png' height={2000} width={2000} className="w-[40vw] ml-10 border-2" alt='DocBlock Home Page'></Image>
            </div> : null
          }
          
        </div>

        <div className="flex justify-center items-center flex-col">
          <hr className="w-[80vw] text-[#1c1d20] mt-10 pb-5"/>
          {/*
          <div className="border-[#1c1d20] rounded-[4rem] border-[1px] border-opacity-30 p-5 w-[12vw] flex justify-center items-center my-10 hover:bg-[#455ce9] hover:text-white cursor-pointer">
            <h1 className="font-noto font-light">More work</h1>
          </div>*/}
        </div>
      </div>
    </div>

    <div id="recentWorksMobile" className="p-10 md:hidden">
      <div>
        <div className="bg-[#ededed] h-[40vh] flex justify-center items-center">
          <Image src='/solsynk_dashboard.png' height={2000} width={2000} className="w-[70vw]" alt='SolSynk. Dashboard'></Image>
        </div>
        <div className="mt-5">
          <h1 className="text-4xl font-saumyaSans font-medium">SolSynk.</h1>
          <hr className="w-[80vw] text-[#1c1d20] mt-5"/>
          <div className="font-noto font-light flex w-[80vw] mt-5">
            <h2>Design & Development</h2>
            <h2 className="ml-auto">2024</h2>
          </div>

        </div>
        
      </div>

      <div className="mt-20">
        <div className="bg-[#ededed] h-[40vh] flex justify-center items-center">
          <Image src='/docblock_home.png' height={2000} width={2000} className="w-[70vw]" alt='DocBlock Home'></Image>
        </div>
        <div className="mt-5 mb-10">
          <h1 className="text-4xl font-saumyaSans font-medium">DocBlock</h1>
          <hr className="w-[80vw] text-[#1c1d20] mt-5"/>
          <div className="font-noto font-light flex w-[80vw] mt-5">
            <h2>Frontend Design & Development</h2>
            <h2 className="ml-auto">2024</h2>
          </div>

        </div>
        
      </div>
    </div>

    <div id="footer"
    className="h-[90vh] bg-[#1c1d20] text-white pt-[10vh] md:pt-[20vh] px-[5vw] md:px-[18vw]">

      <h1 
      className="font-saumyaSans md:font-medium max-w-[60vw] md:max-w-[40vw] mb-[10vh] footer-heading">Let's work together</h1>
      
      <hr className="w-[90vw] md:w-[64vw] mt-8 line-bg"/>
      <div className="btn-round bg-[#455ce9] hover:bg-[#334bd3] rounded-full flex items-center justify-center text-white font-noto mt-[-80] md:mt-[-90] ml-auto mr-10 md:mr-20">
        Get in touch
      </div>

      <div className="flex flex-col md:flex-row">
        <Link href={'mailto:saumyatalwani@gmail.com'}>
        <div className="border-white rounded-[4rem] border-[1px] border-opacity-30 p-5 md:w-[20vw] flex justify-center items-center my-10 hover:bg-[#455ce9] hover:text-white cursor-pointer">
          <h1 className="font-noto font-light">saumyatalwani@gmail.com</h1>
        </div></Link>
        
        <Link href={'tel:+917990735222'}>
        <div className="md:ml-5 border-white rounded-[4rem] border-[1px] border-opacity-30 p-5 md:w-[15vw] flex justify-center items-center md:my-10 hover:bg-[#455ce9] hover:text-white cursor-pointer">
          <h1 className="font-noto font-light">+91 79907 35222</h1>
        </div></Link>

        
      </div>
    </div>
      

      <div className="pb-5 bg-[#1c1d20] h-[10vh]">

      <div className="float-left ml-10">
        <h1 className="text-[0.6em] font-noto text-[rgba(255,255,255,0.4)]">LOCAL TIME</h1>
        <h1 className="font-noto mt-2 text-white">{new Date().getHours()} : {new Date().getMinutes()} <span className="hidden md:inline">{new Date().toString().match(/\(([A-Za-z\s].*)\)/)[1]}</span></h1>
      </div>

      <div className="float-end md:mr-5">  
        <h1 className="text-[0.6em] font-noto text-[rgba(255,255,255,0.4)]">SOCIALS</h1>
          <div className="flex socials mt-2">
            <Link href={'https://www.linkedin.com/in/saumyatalwani/'} target="_blank">LinkedIn</Link>
            <Link href={'https://www.instagram.com/saumyatalwani/'} target="_blank">Instagram</Link>
            <Link href={'https://www.github.com/saumyatalwani/'} target="_blank">GitHub</Link>
          </div>
      </div>
      </div>

    </>
  );
}

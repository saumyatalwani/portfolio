'use client'

import Image from 'next/image'
import Navbar from '@/components/custom/navbar'
import { VelocityScroll } from '@/components/ui/scroll-based-velocity'
import Link from 'next/link'
import { Project } from '@/payload-types'

export default function HomeUI({ data, heroUrl }: { data: Project[]; heroUrl: string }) {
  return (
    <div className="page">
      <div id="hero" className="relative min-h-screen overflow-hidden bg-[#999d9e]">
        <Navbar className={'text-white'} />
        <div className="flex w-screen justify-center items-center">
          <Image
            src={heroUrl}
            width={2000}
            height={2000}
            preload={true}
            className="h-[80vh] md:h-[95vh] w-auto absolute bottom-0"
            alt="Saumya Talwani"
          />
          <div className="absolute bottom-5 left-10 md:bottom-auto md:static md:mt-40 md:ml-[60vw]">
            <div className="arrow big">
              <svg width="16px" height="16px" viewBox="0 0 14 14" version="1.1">
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g
                    id="Artboard"
                    transform="translate(-1019.000000, -279.000000)"
                    stroke="#FFFFFF"
                    strokeWidth="1.5"
                  >
                    <g
                      id="arrow-up-right"
                      transform="translate(1026.000000, 286.000000) rotate(90.000000) translate(-1026.000000, -286.000000) translate(1020.000000, 280.000000)"
                    >
                      <polyline id="Path" points="2.76923077 0 12 0 12 9.23076923"></polyline>
                      <line x1="12" y1="0" x2="0" y2="12" id="Path"></line>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <h4 className="designation mt-5 md:mt-20 font-generalSans font-normal">
              Full-stack
              <br />
              Developer & Designer
            </h4>
          </div>
        </div>
        <div className="absolute bottom-0 mb-32 overflow-x-clip">
          <VelocityScroll
            numRows={1}
            className="text-white w-screen font-generalSans font-normal"
            defaultVelocity={2}
          >
            Saumya Talwani &mdash;{' '}
          </VelocityScroll>
        </div>
      </div>

      <div id="about" className="p-10 md:flex w-full mt-[5vh] md:mt-[20vh] md:ml-[10vw]">
        <div className="md:max-w-[47vw]">
          <h1 className="font-noto text-s text-[#1c1d20]">
            Empowering businesses to succeed by providing practical digital solutions.
          </h1>
          <p className="my-10 font-light">
            My passion for design, code, and interaction uniquely positions me to create innovative,
            user-centered solutions that stand out in the design world.
          </p>
        </div>

        <div className="font-noto flex justify-center items-center w-full md:ml-40 md:block md:max-w-[20vw]">
          <Link
            href="/about"
            className="btn-round bg-[#1c1d20] hover:bg-[#455ce9] rounded-full flex items-center justify-center text-white"
          >
            About me
          </Link>
        </div>
      </div>

      <div id="projects" className="p-10 hidden md:block">
        <div>
          <h1 className="ml-[15vw] text-[0.6em] text-[#1c1d20] font-noto opacity-50">
            RECENT WORK
          </h1>

          {data.map((project: Project, index: number) => {
            return (
              <Link href={`/work/${project.slug}`} className="cursor-pointer" key={index}>
                <div className="flex justify-center items-center flex-col">
                  <hr className="w-[80vw] text-[#1c1d20] mt-8" />
                  <br />
                  <div className="w-[80vw] flex items-center justify-center px-10 py-10">
                    <h1 className="text-6xl font-generalSans font-medium">{project.title}</h1>
                    <h2 className="font-noto font-light ml-auto">{project.type}</h2>
                  </div>
                </div>
              </Link>
            )
          })}

          <div className="flex justify-center items-center flex-col">
            <hr className="w-[80vw] text-[#1c1d20] mt-10 pb-5" />
            <Link
              href={'/work'}
              className="font-noto font-light border-[#1c1d20]/30 rounded-[4rem] border p-5 w-[16vw] flex justify-center items-center my-10 hover:bg-[#455ce9] hover:text-white hover:border-[#455ce9] cursor-pointer"
            >
              More work
            </Link>
          </div>
        </div>
      </div>

      <div id="projects" className="p-10 md:hidden">
        {data.map((project: Project, index: number) => {
          return (
            <Link href={`/work/${project.slug}`} key={index}>
              <div className="mt-20">
                <div className="bg-[#ededed] h-[40vh] flex justify-center items-center">
                  {typeof project.coverImage === 'object' && 'url' in project.coverImage && (
                    <Image
                      src={project.coverImage.url || ''}
                      height={2000}
                      width={2000}
                      className="w-[70vw]"
                      alt={project.coverImage.alt}
                      loading="lazy"
                    ></Image>
                  )}
                </div>
                <div className="mt-5">
                  <h1 className="text-4xl font-generalSans font-medium">{project.title}</h1>
                  <hr className="w-[80vw] text-[#1c1d20] mt-5" />
                  <div className="font-noto font-light flex w-[80vw] mt-5">
                    <h2>{project.type}</h2>
                    <h2 className="ml-auto">{project.year}</h2>
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

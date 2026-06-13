'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Footer() {
  const [time, setTime] = useState<string>('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()

      const timezone = now.toString().match(/\(([A-Za-z\s].*)\)/)?.[1] ?? ''

      setTime(
        `${now.getHours().toString().padStart(2, '0')} : ${now
          .getMinutes()
          .toString()
          .padStart(2, '0')}  ${timezone} `,
      )
    }

    updateTime()

    const interval = setInterval(updateTime, 1000 * 30)

    return () => clearInterval(interval)
  }, [])
  return (
    <>
      <div
        id="contact"
        className="h-[90vh] bg-[#1c1d20] text-white pt-[10vh] md:pt-[20vh] px-[5vw] md:px-[18vw]"
      >
        <h6 className="font-generalSans md:font-medium max-w-[60vw] md:max-w-[40vw] mb-[10vh] footer-heading">
          Let's work together
        </h6>

        <hr className="w-[90vw] md:w-[64vw] mt-8 line-bg" />
        <div className="btn-round bg-[#334bd3] rounded-full flex items-center justify-center text-white font-noto  mt-[-80px] md:mt-[-90px] ml-auto mr-10 md:mr-20">
          Get in touch
        </div>

        <div className="flex flex-col md:flex-row">
          <Link href={'mailto:saumyatalwani@gmail.com'}>
            <div className="border-white/30 rounded-[4rem] border p-5 md:w-[20vw] flex justify-center items-center my-10 hover:bg-[#455ce9] hover:text-white cursor-pointer mr-5">
              <h1 className="font-noto font-light">saumyatalwani@gmail.com</h1>
            </div>
          </Link>

          <Link href={'tel:+917990735222'}>
            <div className="md:ml-5 border-white/30 rounded-[4rem] border p-5 md:w-[15vw] flex justify-center items-center md:my-10 hover:bg-[#455ce9] hover:text-white cursor-pointer mr-5">
              <h1 className="font-noto font-light">+91 79907 35222</h1>
            </div>
          </Link>
        </div>
      </div>

      <div className="pb-5 bg-[#1c1d20] min-h-[10vh] flex flex-col md:flex-row md:justify-between md:items-center px-10 gap-4">
        <div>
          <h1 className="text-[0.6em] font-noto text-[rgba(255,255,255,0.4)]">LOCAL TIME</h1>
          <h1 className="font-noto mt-2 text-white whitespace-pre-wrap">{time}</h1>
        </div>

        <div className="md:mr-5">
          <h1 className="text-[0.6em] font-noto text-[rgba(255,255,255,0.4)]">SOCIALS</h1>
          <div className="flex socials mt-2">
            <Link href={'https://www.linkedin.com/in/saumyatalwani/'} target="_blank">
              LinkedIn
            </Link>
            <Link href={'https://www.instagram.com/saumyatalwani/'} target="_blank">
              Instagram
            </Link>
            <Link href={'https://www.github.com/saumyatalwani/'} target="_blank">
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

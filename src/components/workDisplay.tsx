'use client'
import Navbar from '@/components/custom/navbar'
import { Menu } from 'lucide-react'
import { LayoutGrid } from 'lucide-react'
import { useScreenSize } from '@/components/custom/useScreenSize'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import Image from 'next/image'

import { useRouter } from 'next/navigation'
import { Project } from '@/payload-types'

export default function Display({ data }: { data: Project[] }) {
  const [projects, setProjects] = useState(data)

  const types = [...new Set(projects.map((project) => project.type))]

  const router = useRouter()

  const handleRowClick = (slug: string) => {
    router.push(`/work/${slug}`) // Navigate to the desired page
  }

  const size = useScreenSize()
  const [view, setView] = useState('')

  useEffect(() => {
    if (size == 'xs' || size == 'sm') setView('gallery')
    else setView('list')
  }, [size])
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    if (filter != 'all')
      setProjects(data.filter((projects) => projects.type!.toLowerCase().includes(filter)))
    else setProjects(data)
  }, [filter])

  const CategoryPill = ({ category }: { category: string }) => {
    const cat = category.toLowerCase()
    return (
      <div
        className={clsx(
          'font-saumyaSans text-sm md:text-base rounded-[4rem] p-5 w-[16rem] md:w-48 flex justify-center items-center my-10 cursor-pointer mr-2 md:mr-5',
          filter != cat &&
            'border-[#d7d7d8] border hover:bg-[#455ce9] hover:text-white hover:border-[#455ce9]',
          filter == cat && 'bg-black text-white',
        )}
        onClick={() => setFilter(cat)}
      >
        {category}
      </div>
    )
  }

  return (
    <div>
      <div className="mb-20">
        <div className="pt-[9vh] md:pt-[18vh] px-[6vw] md:px-[16vw]">
          <h1 className="text-4xl md:text-[5rem] leading-none font-saumyaSans font-[450] max-w-[75vw] md:max-w-[50vw]">
            Crafting innovative digital experiences.
          </h1>

          <div className="flex w-[88vw] md:w-[64vw] mt-5">
            <div className="flex-1 overflow-x-auto no-scrollbar">
              <div className="flex w-max">
                <CategoryPill category="All" />
                {types.map((type, index) => (
                  <CategoryPill category={type as string} key={index} />
                ))}
              </div>
            </div>

            <div className="ml-auto hidden md:flex shrink-0">
              <div
                className={clsx(
                  'font-saumyaSans rounded-full p-5 flex justify-center items-center my-10 cursor-pointer mr-5 size-15',
                  view != 'list' &&
                    'border border-[#d7d7d8] hover:bg-[#455ce9] hover:text-white hover:border-[#455ce9]',
                  view == 'list' && 'bg-black text-white',
                )}
                onClick={() => setView('list')}
              >
                <Menu className="size-5" strokeWidth={1} />
              </div>
              <div
                className={clsx(
                  'font-saumyaSans rounded-full p-5 flex justify-center items-center my-10 cursor-pointer size-15',
                  view != 'gallery' &&
                    'border border-[#d7d7d8] hover:bg-[#455ce9] hover:text-white hover:border-[#455ce9]',
                  view == 'gallery' && 'bg-black text-white',
                )}
                onClick={() => setView('gallery')}
              >
                <LayoutGrid className="size-5" strokeWidth={1} />
              </div>
            </div>
          </div>
        </div>

        <div
          className={clsx(
            view == 'list' && 'px-[9vw] md:px-[18vw]',
            view == 'gallery' && 'px-[6vw]',
            'w-screen',
          )}
        >
          {view == 'list' ? (
            <div className="w-[64vw] mt-5 font-saumyaSans">
              <table className="workTable">
                <thead>
                  <tr>
                    <th className="min-w-[25vw]">Project</th>
                    <th className="min-w-[8vw]">Location</th>
                    <th className="min-w-[30vw]">Service</th>
                    <th className="min-w-[6vw]">Year</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project, index) => {
                    return (
                      <tr
                        key={index}
                        onClick={() => handleRowClick(project.slug)}
                        className="cursor-pointer"
                      >
                        <td>{project.title}</td>
                        <td>{project.location}</td>
                        <td>{project.type}</td>
                        <td>{project.year}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          ) : null}
          {view == 'gallery' ? (
            <div className="w-[88vw] mt-5 font-saumyaSans">
              <div className="flex flex-wrap gallery justify-center items-center">
                {projects.map((project, index) => {
                  return (
                    <div
                      className="mt-20 md:mr-10 cursor-pointer"
                      key={index}
                      onClick={() => handleRowClick(project.slug)}
                    >
                      <div className="bg-[#ededed] h-[60vh] px-5 md:px-10 flex justify-center items-center mb-5">
                        {typeof project.coverImage === 'object' && 'url' in project.coverImage && (
                          <Image
                            src={project.coverImage.url!}
                            height={800}
                            width={800}
                            className="w-[70vw] md:w-[30vw]"
                            alt={project.coverImage.alt}
                          />
                        )}
                      </div>
                      <h1 className="text-4xl font-saumyaSans font-medium">{project.title}</h1>
                      <hr className="text-[#1c1d20] mt-5" />
                      <div className="font-noto font-light flex mt-5">
                        <h2>{project.type}</h2>
                        <h2 className="ml-auto">{project.year}</h2>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

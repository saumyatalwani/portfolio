// export const dynamic = 'force-dynamic'
import Image, { ImageProps } from 'next/image'
import { getPayload } from 'payload'
import config from '@payload-config'
import { ReactNode, cache } from 'react'
import { RichText } from '@payloadcms/richtext-lexical/react'

export const getProject = cache(async (slug: string) => {
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'projects',
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
  })

  return result.docs[0] ?? null
})

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  let project = null

  try {
    project = await getProject(slug)
  } catch (error) {
    console.error('Error fetching metadata:', error)
    return { title: 'Error - Unable to load metadata' } // Fallback title
  }

  return {
    title: project.title + ' | Saumya Talwani',
  }
}

// const CustomLink = ({ href, children }: { href: string; children: ReactNode }) => (
//   <a href={href} target="_blank" rel="noopener noreferrer">
//     {children}
//   </a>
// )

// const CustomImage = (props: ImageProps) => (
//   <Image
//     src={props.src}
//     alt={props.alt || 'Image'}
//     width={800}
//     height={500}
//     style={{ width: 'auto', height: 'auto' }}
//     className="rounded-lg shadow-lg my-10"
//   />
// )

async function getData(slug: string) {
  let project = null
  try {
    project = await getProject(slug)
  } catch (error) {
    console.error('Error fetching data:', error)
    return null
  }

  return project
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = await getData(slug)
  if (!project) {
    return (
      <>
        <div className="pt-[15vh] px-[20vw] mb-20 text-red-600 font-saumyaSans">
          Error fetching post data. Please try again later.
        </div>
      </>
    )
  }

  return (
    <>
      <div className="pt-[10vh] md:pt-[15vh] px-[10vw] md:px-[20vw] mb-20">
        <h1 className="text-6xl md:text-8xl font-saumyaSans font-medium mb-20">{project.title}</h1>
        <div className="flex">
          <table className="workPage">
            <thead>
              <tr>
                <th className="min-w-[10vw]">Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{project.location}</td>
              </tr>
            </tbody>
          </table>
          <table className="workPage">
            <thead>
              <tr>
                <th className="min-w-[20vw]">Service</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{project.type}</td>
              </tr>
            </tbody>
          </table>
          <table className="workPage">
            <thead>
              <tr>
                <th className="min-w-[10vw]">Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{project.year}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="myContent mt-10 font-noto font-light text-justify">
          <RichText data={project.content!} />
        </div>
      </div>
    </>
  )
}

import { GlobeIcon } from '@primer/octicons-react'
import { BriefcaseBusinessIcon } from 'lucide-react'
import Image from 'next/image'
import { getPayload } from 'payload'
import config from '@payload-config'
import { ExperienceTimeline } from '@/components/custom/experienceTimeline'

export default async function About() {
  let imageUrl = ''
  try {
    const payload = await getPayload({ config })
    const image = await payload.find({
      collection: 'media',
      where: {
        alt: {
          equals: 'about',
        },
      },
    })
    imageUrl = image.docs[0]?.url || ''

    // Fetch Work Experience
    const workExperiences = await payload.find({
      collection: 'work-experience',
    })

    const companies = workExperiences.docs
      .sort((a: any, b: any) => {
        const latestRoleA = a.roles?.reduce(
          (latest: any, role: any) =>
            !latest || new Date(role.startDate) > new Date(latest.startDate) ? role : latest,
          null,
        )
        const latestRoleB = b.roles?.reduce(
          (latest: any, role: any) =>
            !latest || new Date(role.startDate) > new Date(latest.startDate) ? role : latest,
          null,
        )

        const dateA = latestRoleA?.startDate ? new Date(latestRoleA.startDate).getTime() : 0
        const dateB = latestRoleB?.startDate ? new Date(latestRoleB.startDate).getTime() : 0

        return dateB - dateA
      })
      .map((companyDoc: any) => ({
        company: companyDoc.company,
        logo: companyDoc.logo?.url || undefined,
        roles:
          companyDoc.roles
            ?.sort((a: any, b: any) => {
              const dateA = a.startDate ? new Date(a.startDate).getTime() : 0
              const dateB = b.startDate ? new Date(b.startDate).getTime() : 0
              return dateB - dateA
            })
            .map((roleDoc: any) => {
              const startDate = roleDoc.startDate ? new Date(roleDoc.startDate) : null
              const endDate = roleDoc.endDate ? new Date(roleDoc.endDate) : null

              const format = (date: Date | null) => {
                if (!date) return ''
                return date.toLocaleDateString('en-US', {
                  month: 'short',
                  year: 'numeric',
                })
              }

              const duration = startDate
                ? `${format(startDate)} ${endDate ? `- ${format(endDate)}` : '- Present'}`
                : ''

              return {
                role: roleDoc.role,
                duration: duration,
                description: roleDoc.description,
                employmentType: roleDoc.employmentType,
                location: roleDoc.location,
              }
            }) || [],
      }))

    return (
      <>
        <div className="pt-[15vh] pl-[9vw] md:pl-[18vw] mb-20">
          <h1 className="font-saumyaSans font-[450] mb-[14vh] about-heading md:max-w-[60vw]">
            Helping brands thrive in the digital world
          </h1>

          <div>
            <hr className="w-[80vw] md:w-[72vw] mt-8" />
            <div className="btn-round bg-[#334bd3] rounded-full flex items-center justify-center text-white font-noto -mt-20 md:-mt-22.5 ml-auto mr-[14vw] md:mr-[16vw]">
              <GlobeIcon className="size-20" />
            </div>
          </div>

          <div className="flex mt-10 flex-col md:flex-row">
            <div className="md:w-[20vw] mr-[10vw] text-justify">
              <h2 className="font-generalSans">
                I craft practical digital solutions for companies worldwide, blending cutting-edge
                design, seamless functionality, and a commitment to excellence to deliver
                exceptional results with every project.
              </h2>
            </div>
            <div className="w-[80vw] mt-10 md:mt-0 md:w-[40vw]">
              <Image
                src={imageUrl}
                alt="Saumya Talwani"
                height={200}
                width={200}
                className="h-full w-auto"
              />
            </div>
          </div>

          <h1 className="font-saumyaSans font-[450] mb-[5vh] about-heading md:max-w-[60vw] mt-20">
            Experience
          </h1>
          <div>
            <hr className="w-[80vw] md:w-[72vw] mt-8" />
            <div className="btn-round bg-[#334bd3] rounded-full flex items-center justify-center text-white font-noto -mt-20 md:-mt-22.5 ml-auto mr-[14vw] md:mr-[16vw]">
              <BriefcaseBusinessIcon className="size-20" />
            </div>
          </div>
          <div className="md:max-w-[60vw]">
            <ExperienceTimeline companies={companies} />
          </div>
        </div>
      </>
    )
  } catch (error) {
    console.error('Error fetching data:', error)
    return (
      <>
        <div className="pt-[15vh] px-[20vw] mb-20 text-red-600 font-generalSans">
          {/*Error fetching post data. Please try again later.*/}
          {JSON.stringify(error)}
        </div>
      </>
    )
  }
}

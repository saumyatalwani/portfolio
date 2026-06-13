import HomeUI from '@/components/home'
import { getPayload } from 'payload'
import config from '@payload-config'

export default async function Home() {
  let projects = null
  let imageUrl = ''

  try {
    const payload = await getPayload({ config })

    const result = await payload.find({
      collection: 'projects',
      depth: 1,
      limit: 3,
      page: 1,
    })
    projects = result.docs
    const image = await payload.find({
      collection: 'media',
      where: {
        alt: {
          equals: 'hero',
        },
      },
    })
    imageUrl = image.docs[0].url!
    console.log(imageUrl)
  } catch (error) {
    console.error('Error fetching data:', error)
    return (
      <>
        <div className="pt-[15vh] px-[20vw] mb-20 text-red-600 font-generalSans">
          {' '}
          {/*Error fetching post data. Please try again later.*/}
          {JSON.stringify(error)}
        </div>
      </>
    )
  }

  return <HomeUI data={projects} heroUrl={imageUrl} />
}

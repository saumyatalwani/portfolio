import Display from '@/components/workDisplay'
import { getPayload } from 'payload'
import config from '@payload-config'

export default async function Work() {
  let projects = null

  try {
    const payload = await getPayload({ config })

    const result = await payload.find({
      collection: 'projects',
    })
    projects = result.docs
  } catch (error) {
    console.error('Error fetching data:', error)
    return (
      <>
        <div className="pt-[15vh] px-[20vw] mb-20 text-red-600 font-saumyaSans">
          Error fetching data. Please try again later.
        </div>
      </>
    )
  }

  return <Display data={projects} />
}

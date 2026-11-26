import { getPayload } from 'payload'
import config from '@payload-config'

const [email, password] = process.argv.slice(2)

const payload = await getPayload({ config })

if (!email) {
  const { docs } = await payload.find({ collection: 'users', limit: 100, depth: 0 })
  console.log('Users:', docs.map((u) => u.email))
  process.exit(0)
}

if (!password) {
  console.error('Usage: payload run scripts/reset-password.ts <email> <new-password>')
  process.exit(1)
}

const { docs } = await payload.find({
  collection: 'users',
  where: { email: { equals: email } },
  limit: 1,
  depth: 0,
})

if (!docs[0]) {
  console.error(`No user found with email ${email}`)
  process.exit(1)
}

await payload.update({
  collection: 'users',
  id: docs[0].id,
  data: { password },
})

console.log(`Password updated for ${email}`)
process.exit(0)

import type { CollectionConfig } from 'payload'
import { slugField } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'year', 'type', 'location'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    slugField({
      name: 'slug',
      useAsSlug: 'title',
      required: true,
    }),
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'year',
      type: 'number',
      required: true,
    },
    {
      name: 'type',
      type: 'text',
    },
    {
      name: 'location',
      type: 'text',
    },
    {
      name: 'content',
      type: 'richText',
    },
  ],
}

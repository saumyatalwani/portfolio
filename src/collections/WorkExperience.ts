import type { CollectionConfig } from 'payload'

export const WorkExperience: CollectionConfig = {
  slug: 'work-experience',
  admin: {
    useAsTitle: 'company',
    defaultColumns: ['company', 'roles.role'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'company',
      type: 'text',
      required: true,
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'roles',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'role',
          type: 'text',
          required: true,
        },
        {
          name: 'employmentType',
          type: 'select',
          required: true,
          options: [
            { label: 'Full-time', value: 'full-time' },
            { label: 'Part-time', value: 'part-time' },
            { label: 'Internship', value: 'internship' },
            { label: 'Freelance', value: 'freelance' },
            { label: 'Contract', value: 'contract' },
            { label: 'Other', value: 'other' },
          ],
        },
        {
          name: 'location',
          type: 'text',
        },
        {
          name: 'startDate',
          type: 'date',
          required: true,
        },
        {
          name: 'endDate',
          type: 'date',
        },
        {
          name: 'description',
          type: 'richText',
        },
      ],
    },
  ],
}

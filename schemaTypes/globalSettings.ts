import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'globalSettings',
  title: 'Global Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'header',
      title: 'Header',
      type: 'object',
      fields: [
        {
          name: 'logo',
          title: 'Logo',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'navigation',
          title: 'Navigation Items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'label',
                  title: 'Label',
                  type: 'string',
                },
                {
                  name: 'link',
                  title: 'Link',
                  type: 'string',
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'object',
      fields: [
        {
          name: 'logo',
          title: 'Footer Logo',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
        },
        {
          name: 'socialLinks',
          title: 'Social Links',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'platform',
                  title: 'Platform',
                  type: 'string',
                },
                {
                  name: 'url',
                  title: 'URL',
                  type: 'url',
                },
              ],
            },
          ],
        },
        {
          name: 'copyrightText',
          title: 'Copyright Text',
          type: 'string',
        },
      ],
    }),
  ],
})

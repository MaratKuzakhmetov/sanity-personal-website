import { defineField, defineType } from 'sanity'

export const contentBlockType = (lang: 'En' | 'Ru' | 'De') =>
  defineType({
    name: `contentBlock${lang}`,
    title: `Content Block (${lang})`,
    type: 'document',
    fields: [
      defineField({
        name: 'title',
        title: 'Block Title',
        type: 'string',
        validation: Rule => Rule.required(),
      }),
      defineField({
        name: 'slug',
        title: 'Block Link',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
        validation: Rule => Rule.required(),
      }),
      defineField({
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [
          { type: 'block' },
          { type: 'image', options: { hotspot: true } },
        ],
      }),
    ],
    preview: {
      select: {
        title: 'title',
        slug: 'slug.current',
      },
      prepare({ title, slug }) {
        return {
          title,
          subtitle: `/${slug}`,
        }
      },
    },
  })

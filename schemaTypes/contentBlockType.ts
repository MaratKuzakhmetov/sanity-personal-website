import {defineField, defineType} from 'sanity'
import {ImageIcon, BlockElementIcon} from '@sanity/icons'

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
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'slug',
        title: 'Block Link',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [
          {
            type: 'block',
            marks: {
              decorators: [
                {title: 'Strong', value: 'strong'},
                {title: 'Emphasis', value: 'em'},
              ],
              annotations: [
                {
                  name: 'link',
                  type: 'object',
                  title: 'Link',
                  fields: [{name: 'href', type: 'url', title: 'URL'}],
                },
                {type: 'textColor'},
                {type: 'highlightColor'},
              ],
            },
          },
          {
            type: 'object',
            name: 'subBlock',
            title: 'Sub Block',
            icon: BlockElementIcon,
            fields: [
              {
                name: 'title',
                title: 'Sub Block Title',
                type: 'string',
                validation: (Rule) => Rule.required(),
              },
              {
                name: 'blockContent',
                title: 'Sub Block Content',
                type: 'blockContent',
              },
            ],
          },
          {
            type: 'image',
            title: 'Image',
            icon: ImageIcon,
            options: {hotspot: true},
            fields: [
              {
                name: 'alt',
                type: 'string',
                title: 'Alt text',
                options: {isHighlighted: true},
              },
            ],
          },
        ],
      }),
    ],
    preview: {
      select: {
        title: 'title',
        slug: 'slug.current',
      },
      prepare({title, slug}) {
        return {
          title,
          subtitle: `/${slug}`,
        }
      },
    },
  })

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'mainSettings',
  title: 'Main Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'mainText',
      title: 'Main Text',
      type: 'text',
    }),
    defineField({
      name: 'contentBlocks',
      title: 'Content Blocks',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'contentBlockEn'}, {type: 'contentBlockRu'}, {type: 'contentBlockDe'}],
          options: {
            filter: ({document}) => {
              const id = document?._id || ''
              const langSuffix = id.split('-').pop() || 'En'
              const capitalized = langSuffix.charAt(0).toUpperCase() + langSuffix.slice(1)

              return {
                filter: '_type == $type',
                params: {
                  type: `contentBlock${capitalized}`,
                },
              }
            },
          },
        },
      ],
    }),
  ],
})

import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

const languages = [
  {id: 'en', title: 'English'},
  {id: 'ru', title: 'Russian'},
  {id: 'de', title: 'German'},
]

export default defineConfig({
  name: 'default',
  title: 'Personal Website',

  projectId: 'srmsnwov',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Create a folder for each language
            ...languages.map((lang) =>
              S.listItem()
                .title(lang.title)
                .id(lang.id)
                .child(
                  S.list()
                    .title(lang.title)
                    .items([
                      // Global Settings document
                      S.listItem()
                        .title('Global Settings')
                        .child(
                          S.document()
                            .schemaType('globalSettings')
                            .documentId(`globalSettings-${lang.id}`),
                        ),
                      // Main Settings document
                      S.listItem()
                        .title('Main Settings')
                        .child(
                          S.document()
                            .schemaType('mainSettings')
                            .documentId(`mainSettings-${lang.id}`),
                        ),
                      // Content section
                      S.listItem()
                        .title('Content')
                        .id(`Content-${lang.id}`)
                        .child(
                          S.documentTypeList(
                            `contentBlock${lang.id.charAt(0).toUpperCase()}${lang.id.slice(1)}`,
                          )
                            .id(`ContentBlock-${lang.id}`)
                            .title('Content'),
                        ),
                    ]),
                ),
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})

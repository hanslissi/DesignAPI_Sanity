import {defineField, defineType} from 'sanity'

export const collectionType = defineType({
  title: 'Collection',
  name: 'collection',
  type: 'document',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Icon',
      name: 'icon',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
  ],
})

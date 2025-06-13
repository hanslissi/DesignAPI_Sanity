import {defineField, defineType} from 'sanity'

export const cardType = defineType({
  title: 'Card',
  name: 'card',
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
      title: 'Collection',
      name: 'collection',
      type: 'reference',
      to: [{type: 'collection'}],
    }),
    defineField({
      title: 'Front Light Mode',
      name: 'imgFrontLight',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Back Light Mode',
      name: 'imgBackLight',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Front Dark Mode',
      name: 'imgFrontDark',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Back Dark Mode',
      name: 'imgBackDark',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
  ],
})

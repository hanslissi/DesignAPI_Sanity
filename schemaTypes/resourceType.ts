import {defineField, defineType} from 'sanity'

export const resourceType = defineType({
  title: 'Resource',
  name: 'resource',
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
      title: 'Description',
      name: 'description',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Thumbnail',
      name: 'imgThumbnail',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Resource File',
      name: 'resourceFile',
      type: 'file'
    }),
    defineField({
      title: 'Resource URL',
      name: 'resourceUrl',
      type: 'url'
    })
  ],
})

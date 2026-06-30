import {defineField, defineType} from 'sanity'

export const serviceItem = defineType({
  name: 'serviceItem',
  title: 'Service',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (r) => r.required(),
    }),
  ],
  preview: {
    select: {title: 'title'},
  },
})

export const credentialItem = defineType({
  name: 'credentialItem',
  title: 'Credential',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (r) => r.required(),
    }),
  ],
  preview: {
    select: {title: 'title'},
  },
})

export const testimonialItem = defineType({
  name: 'testimonialItem',
  title: 'Testimonial',
  type: 'object',
  fields: [
    defineField({name: 'quote', title: 'Quote', type: 'text', rows: 4, validation: (r) => r.required()}),
    defineField({
      name: 'authorName',
      title: 'Client name',
      type: 'string',
      validation: (r) => r.required(),
    }),
  ],
  preview: {
    select: {title: 'authorName', subtitle: 'quote'},
  },
})

export const transformationItem = defineType({
  name: 'transformationItem',
  title: 'Before & after',
  type: 'object',
  fields: [
    defineField({
      name: 'beforeImage',
      title: 'Before image',
      type: 'image',
      options: {hotspot: true},
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'afterImage',
      title: 'After image',
      type: 'image',
      options: {hotspot: true},
      validation: (r) => r.required(),
    }),
  ],
  preview: {
    select: {media: 'afterImage'},
    prepare: ({media}) => ({title: 'Transformation', media}),
  },
})

export const socialLink = defineType({
  name: 'socialLink',
  title: 'Social link',
  type: 'object',
  fields: [
    defineField({
      name: 'platform',
      title: 'Platform',
      type: 'string',
      options: {
        list: [
          {title: 'Instagram', value: 'Instagram'},
          {title: 'TikTok', value: 'TikTok'},
          {title: 'Facebook', value: 'Facebook'},
          {title: 'Pinterest', value: 'Pinterest'},
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({name: 'url', title: 'URL', type: 'url', validation: (r) => r.required()}),
  ],
})

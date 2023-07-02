
import { defineField } from "sanity"

export default [
  defineField({
    name: 'title',
    title: 'Title',
    type: 'string',
  }),
  defineField({
    name: 'description',
    title: 'Description',
    type: 'text',
  }),
  defineField({
    name: 'gitHubLink',
    title: 'GitHub Link',
    type: 'string',
  }),
  defineField({
    name: 'hostedLink',
    title: 'Hosted Link',
    type: 'string',
  }),

  defineField({
    name: 'tools',
    title: 'Tools',
    type: 'array',
    of: [{type: 'reference', to: [{type: 'tools'}]}],
  }),
  defineField({
    name: 'images',
    title: 'Images',
    type: 'array',
    of:[{type:"image"}],
    options: {
      hotspot: true,
    },
  }),
]
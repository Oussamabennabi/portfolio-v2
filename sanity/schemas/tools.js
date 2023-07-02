
import { defineField, defineType } from "sanity"

export default defineType({
  name: 'tools',
  title: 'Tools',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
  ],
})
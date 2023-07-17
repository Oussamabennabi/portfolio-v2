import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'resume',
  title: 'Resume',
  type: 'file',
  fields: [  defineField({
    name: 'resumeFile',
    title: 'Resume File',
    type: 'file',
  })],
})

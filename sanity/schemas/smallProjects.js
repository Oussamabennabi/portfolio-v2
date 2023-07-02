import {defineField, defineType} from 'sanity'
import globalType from './globalFields'

export default defineType({
  name: 'smallProjects',
  title: 'Small Projects',
  type: 'document',
  fields: [...globalType],
})

import {defineField, defineType} from 'sanity'
import globalType from './globalFields'

export default defineType({
  name: 'bigProjects',
  title: 'Big Projects',
  type: 'document',
  fields: [...globalType],
})

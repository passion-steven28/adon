import { defineType } from 'sanity'

export default defineType({
    name: 'brand',
    title: 'Brand',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => Rule.required()
        },
    ]
})
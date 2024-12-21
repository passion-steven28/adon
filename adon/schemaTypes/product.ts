import { defineType } from 'sanity'

export default defineType({
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90,
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'productType',
            title: 'Product Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Laptop', value: 'laptop' },
                    { title: 'Desktop', value: 'desktop' },
                    { title: 'Accessory', value: 'accessory' }
                ]
            }
        },
        {
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }],
            validation: Rule => Rule.min(1).required()
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
            validation: Rule => Rule.required().positive()
        },
        {
            name: 'discountedPrice',
            title: 'Discounted Price',
            type: 'number'
        },
        {
            name: 'brand',
            title: 'Brand',
            type: 'reference',
            to: [{ type: 'brand' }]
        },
        {
            name: 'specifications',
            title: 'Specifications',
            type: 'object',
            fields: [
                { name: 'processor', title: 'Processor', type: 'string' },
                { name: 'ram', title: 'RAM', type: 'string' },
                { name: 'storage', title: 'Storage', type: 'string' },
                { name: 'display', title: 'Display', type: 'string' },
                { name: 'graphics', title: 'Graphics Card', type: 'string' },
                { name: 'operatingSystem', title: 'Operating System', type: 'string' }
            ]
        },
        {
            name: 'stockQuantity',
            title: 'Stock Quantity',
            type: 'number',
            validation: Rule => Rule.required().min(0)
        },
        {
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: 'block' }]
        },
        {
            name: 'features',
            title: 'Key Features',
            type: 'array',
            of: [{ type: 'string' }]
        },
    ]
}
)
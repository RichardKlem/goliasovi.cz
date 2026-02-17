import { defineField, defineType } from 'sanity';

export const weddingSection = defineType({
    name: 'weddingSection',
    title: 'Wedding Section',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle (Badge)',
            type: 'string',
            description: 'The small text above the title (e.g., "Příběh naší lásky")'
        }),
        defineField({
            name: 'anchor',
            title: 'Anchor ID',
            description: 'Used for navigation (e.g., "story" for #story)',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96
            },
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'type',
            title: 'Section Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Our Story', value: 'story' },
                    { title: 'Ceremony', value: 'ceremony' },
                    { title: 'Celebration', value: 'celebration' },
                    { title: 'Other', value: 'other' }
                ]
            },
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block' }]
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        }),
        defineField({
            name: 'instagramEmbed',
            title: 'Instagram Embed Code',
            description: 'Paste the full embed code from Instagram here',
            type: 'text',
            rows: 10
        })
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'type',
            media: 'image'
        }
    }
});

import { HeartIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'weddingPage',
    title: 'Wedding Page',
    description: 'The main page of the wedding website',
    type: 'document',
    icon: HeartIcon,
    groups: [
        {
            name: 'content',
            title: 'Content',
            default: true
        },
        {
            name: 'seo',
            title: 'SEO'
        }
    ],
    fields: [
        defineField({
            name: 'title',
            title: 'Page Title',
            type: 'string',
            initialValue: 'Naše Svatba',
            validation: (Rule) => Rule.required(),
            group: 'content'
        }),
        defineField({
            name: 'sections',
            title: 'Sections',
            description: 'Add and order sections for the main page',
            type: 'array',
            of: [{ type: 'weddingSection' }, { type: 'venueSection' }],
            group: 'content'
        }),
        defineField({
            name: 'metaTitle',
            title: 'SEO Title',
            description: 'Ideally between 15 and 70 characters.',
            type: 'string',
            validation: (Rule) => Rule.max(70).warning('Consider shortening the title'),
            group: 'seo'
        }),
        defineField({
            name: 'metaDescription',
            title: 'SEO Description',
            description: 'Ideally between 70 and 160 characters.',
            type: 'text',
            rows: 3,
            validation: (Rule) => Rule.max(160).warning('Consider shortening the description'),
            group: 'seo'
        })
    ],
    preview: {
        select: {
            title: 'title'
        },
        prepare({ title }) {
            return {
                title: title || 'Wedding Page'
            };
        }
    }
});

import { ImagesIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const guestGallerySection = defineType({
    name: 'guestGallerySection',
    title: 'Guest Gallery Section',
    type: 'object',
    icon: ImagesIcon,
    fields: [
        defineField({
            name: 'title',
            title: 'Section Title',
            type: 'string',
            initialValue: 'Fotky od hostů',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'subtitle',
            title: 'Section Subtitle',
            type: 'string'
        }),
        defineField({
            name: 'anchor',
            title: 'Section ID (Anchor)',
            description: 'Used for navigation (e.g., "fotky-od-hostu" becomes #fotky-od-hostu)',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96
            },
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'driveEndpointUrl',
            title: 'Google Apps Script Web App URL',
            description: 'The URL of the deployed Google Apps Script (same as the upload section).',
            type: 'url',
            validation: (Rule) => Rule.required()
        })
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'subtitle'
        },
        prepare({ title, subtitle }) {
            return {
                title: title || 'Guest Gallery Section',
                subtitle: subtitle
            };
        }
    }
});

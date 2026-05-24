import { UploadIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const photoUploadSection = defineType({
    name: 'photoUploadSection',
    title: 'Photo Upload Section',
    type: 'object',
    icon: UploadIcon,
    fields: [
        defineField({
            name: 'title',
            title: 'Section Title',
            type: 'string',
            initialValue: 'Nahrajte nám fotky',
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
            description: 'Used for navigation (e.g., "nahrat-fotky" becomes #nahrat-fotky)',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96
            },
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'description',
            title: 'Description Text',
            description: 'Simple text that this is the place where they can upload their photos.',
            type: 'text',
            rows: 3
        }),
        defineField({
            name: 'uploadEndpointUrl',
            title: 'Google Apps Script Web App URL',
            description: 'The URL of the deployed Google Apps Script that handles the photo upload to Google Drive.',
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
                title: title || 'Photo Upload Section',
                subtitle: subtitle
            };
        }
    }
});

import { ImagesIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const gallerySection = defineType({
    name: 'gallerySection',
    title: 'Gallery Section',
    type: 'object',
    icon: ImagesIcon,
    fields: [
        defineField({
            name: 'title',
            title: 'Section Title',
            type: 'string',
            initialValue: 'Fotogalerie',
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
            description: 'Used for navigation (e.g., "fotogalerie" becomes #fotogalerie)',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96
            },
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }],
            options: {
                layout: 'grid'
            },
            validation: (Rule) => Rule.required().min(1)
        })
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'subtitle',
            media: 'images.0' // show the first image as preview
        },
        prepare({ title, subtitle, media }) {
            return {
                title: title || 'Gallery Section',
                subtitle: subtitle,
                media: media
            };
        }
    }
});

import { PinIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const venueSection = defineType({
    name: 'venueSection',
    title: 'Venue/Map Section',
    type: 'object',
    icon: PinIcon,
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string'
        }),
        defineField({
            name: 'anchor',
            title: 'Anchor ID',
            description: 'Used for navigation (e.g., "kudy-kam")',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96
            },
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'churchTitle',
            title: 'Church/Ceremony Title',
            type: 'string',
            initialValue: 'Obřad'
        }),
        defineField({
            name: 'churchMap',
            title: 'Church Map Embed (Iframe)',
            type: 'text',
            rows: 3
        }),
        defineField({
            name: 'churchDirectionsUrl',
            title: 'Church Directions URL',
            description: 'Link to Google Maps for "Get Directions"',
            type: 'url'
        }),
        defineField({
            name: 'venueTitle',
            title: 'Celebration Venue Title',
            type: 'string',
            initialValue: 'Oslava'
        }),
        defineField({
            name: 'venueMap',
            title: 'Venue Map Embed (Iframe)',
            type: 'text',
            rows: 3
        }),
        defineField({
            name: 'venueDirectionsUrl',
            title: 'Venue Directions URL',
            description: 'Link to Google Maps for "Get Directions"',
            type: 'url'
        })
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'anchor.current'
        }
    }
});

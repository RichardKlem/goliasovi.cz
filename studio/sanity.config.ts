import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { markdownSchema } from 'sanity-plugin-markdown';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemaTypes';

export default defineConfig({
    name: 'default',
    title: 'Goliasovi',

    projectId: 'mbg5dp30',
    dataset: 'production',

    plugins: [structureTool(), visionTool(), markdownSchema()],

    schema: {
        types: schemaTypes
    }
});

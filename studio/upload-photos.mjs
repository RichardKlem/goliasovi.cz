import { createReadStream } from 'node:fs';
import { readdir, stat } from 'node:fs/promises';
import { extname, join } from 'node:path';
import { createClient } from '@sanity/client';

// Load Sanity configuration from sanity.cli.ts or .env
// We need projectId, dataset, and a write token.
// Please make sure SANITY_WRITE_TOKEN is set in your environment.
const projectId = 'v31d68x9'; // Example, please replace or ensure correct project ID
const dataset = 'production';

if (!process.env.SANITY_WRITE_TOKEN) {
    console.error('Error: SANITY_WRITE_TOKEN environment variable is required.');
    console.error('Please create a token with write access in your Sanity project settings and run:');
    console.error('SANITY_WRITE_TOKEN="your-token" node upload-photos.mjs');
    process.exit(1);
}

const client = createClient({
    projectId: process.env.SANITY_PROJECT_ID || projectId, // replace if needed
    dataset: process.env.SANITY_DATASET || dataset,
    useCdn: false,
    token: process.env.SANITY_WRITE_TOKEN,
    apiVersion: '2024-05-24' // use today's date or current version
});

const PHOTOS_DIR = '/Users/richardklem/Downloads/goliasovi-predsvatebni-y7fmh2tvpl';

async function uploadPhotos() {
    console.log(`Scanning directory: ${PHOTOS_DIR}`);
    const files = await readdir(PHOTOS_DIR);

    const validExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
    const imageFiles = files.filter((file) => validExtensions.includes(extname(file).toLowerCase()));

    console.log(`Found ${imageFiles.length} images. Starting upload...`);

    const imageAssets = [];

    for (let i = 0; i < imageFiles.length; i++) {
        const file = imageFiles[i];
        const filePath = join(PHOTOS_DIR, file);

        try {
            console.log(`[${i + 1}/${imageFiles.length}] Uploading ${file}...`);
            const asset = await client.assets.upload('image', createReadStream(filePath), {
                filename: file
            });
            console.log(`  -> Success! Asset ID: ${asset._id}`);

            imageAssets.push({
                _key: `img_${i}_${Date.now()}`,
                _type: 'image',
                asset: {
                    _type: 'reference',
                    _ref: asset._id
                }
            });
        } catch (error) {
            console.error(`  -> Failed to upload ${file}:`, error.message);
        }
    }

    console.log('Upload complete!');
    console.log(`Total successful uploads: ${imageAssets.length}`);

    if (imageAssets.length > 0) {
        console.log('You can now add these images to your Gallery Section in Sanity Studio.');
        console.log('If you want to automatically create a Document with these images, you could extend this script to create a "weddingPage" update.');
    }
}

uploadPhotos().catch(console.error);

import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
    api: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: 'production'
    },
    deployment: {
        appId: process.env.SANITY_APP_ID
    }
});

import { client } from '@utils/sanity-client';
import { IMAGE } from './blocks';

const CONFIG_QUERY_OBJ = `{
  _id,
  "favicon": {
    "src": favicon.asset->url
  },
  header {
    ...,
    logo ${IMAGE},
    logoIcon ${IMAGE}
  },
  footer,
  titleSuffix
}`;

export async function fetchData() {
    try {
        const config = await client.fetch(`*[_type == "siteConfig"][0] ${CONFIG_QUERY_OBJ}`);
        if (config) return config;
    } catch (e) {
        console.warn('Could not fetch site config, using fallback.');
    }

    return {
        titleSuffix: '',
        header: {
            title: 'Goliášovi',
            navLinks: []
        },
        footer: {
            text: ''
        }
    };
}

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
        console.warn("Could not fetch site config, using fallback.");
    }

    return {
        titleSuffix: " | Svatba Goliášovi",
        header: {
            title: "Goliášovi",
            navLinks: [
                { _type: 'actionLink', label: 'Náš příběh', url: '#story' },
                { _type: 'actionLink', label: 'Obřad', url: '#ceremony' },
                { _type: 'actionLink', label: 'Oslava', url: '#celebration' },
                { _type: 'actionLink', label: 'Program', url: '#program' },
                { _type: 'actionLink', label: 'Dárky', url: '#gifts' },
            ]
        },
        footer: {
            text: "© 2026 Goliášovi. Těšíme se na vás!"
        }
    };
}

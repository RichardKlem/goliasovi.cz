import { client } from '@utils/sanity-client';
import { SECTIONS } from './blocks';

const PAGE_QUERY_OBJ = `{
  _id,
  slug,
  title,
  metaTitle,
  metaDescription,
  "socialImage": {
    "src": socialImage.asset->url
  },
  sections[] ${SECTIONS}
}`;

export async function fetchData(language = 'en') {
    const filter = language === 'en' ? `language == "en" || !defined(language)` : `language == "${language}"`;
    return await client.fetch(`*[_type == "page" && (${filter})] ${PAGE_QUERY_OBJ}`);
}

export async function getPageById(id, language = 'en') {
    const filter = language === 'en' ? `language == "en" || !defined(language)` : `language == "${language}"`;
    return await client.fetch(`*[_type == "page" && _id == "${id}" && (${filter})] ${PAGE_QUERY_OBJ}`);
}

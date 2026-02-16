# Goliasovi Website

Modern Czech website built with Astro, Sanity CMS, and Netlify.

Project placeholder description.

| Prerequisites                                                    |
| :--------------------------------------------------------------- |
| [Node.js](https://nodejs.org/) v20.+ (managed via Volta)         |

## Quick Start

1. **Install dependencies:**
```bash
npm install
cd studio && npm install && cd ..
```

2. **Configure environment:**
```bash
cp .env.example .env
# Edit .env and add your Sanity project ID and token
```

3. **Start development server:**
```bash
npm run dev
```

Visit http://localhost:3000 to see your site.

### Run Sanity Studio

In a separate terminal:
```bash
cd studio && npm run dev
```

Visit http://localhost:3333 to edit content.

Or use the deployed studio at https://goliasovi.sanity.studio

## Tech Stack

- **Frontend**: Astro v5 (Static Site Generator)
- **CMS**: Sanity v5 (Headless CMS with visual editing)
- **Styling**: Tailwind CSS v4 + DaisyUI v5
- **Hosting**: Netlify (with automatic deployments)
- **Linting/Formatting**: Biome
- **Node Version**: Volta (v20)

## Deployment to Netlify

1. **Connect repository to Netlify**
2. **Set environment variables** in Netlify site settings:
   - `SANITY_PROJECT_ID`
   - `SANITY_DATASET` (production)
   - `SANITY_TOKEN`
3. **Deploy** - Netlify will automatically build and deploy

Build settings:
- Build command: `npm run build`
- Publish directory: `dist`

## Development

### Key Directories

- `/src/components/` - Astro components (Hero, Cards, CTA, etc.)
- `/src/pages/` - Dynamic page routing
- `/src/styles/` - Global styles and Tailwind config
- `/studio/` - Sanity Studio configuration
- `/studio/schemaTypes/` - Content type definitions

### Available Scripts

- `npm run dev` - Start dev server (port 3000)
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run Biome linter
- `npm run format` - Format code with Biome
- `npm run check` - Run Biome lint + format

## Customization

### Update Theme Colors

Edit `/src/styles/globals.css` to customize the DaisyUI theme.

### Add New Sections

1. Create schema in `/studio/schemaTypes/`
2. Create component in `/src/components/`
3. Update page routing in `/src/pages/[...slug].astro`

### Edit Content

Use Sanity Studio (http://localhost:3333) or https://goliasovi.sanity.studio

## Resources

- [Astro Documentation](https://docs.astro.build)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [DaisyUI Components](https://daisyui.com/components/)
- [Netlify Docs](https://docs.netlify.com)

---

**Goliasovi** - Modern website project.

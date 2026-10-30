import {defineConfig} from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({site:'https://storage.guidehollow.com/',output:'static',trailingSlash:'always',integrations:[sitemap({filter:(u)=>!['/guides/','/privacy/','/disclosure/'].includes(new URL(u).pathname)})]});

import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import dotenv from 'dotenv';

dotenv.config();  // Load environment variables


export default defineConfig({
	plugins: [sveltekit(), purgeCss()]
});
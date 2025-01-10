import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import paths from 'vite-tsconfig-paths';

export default defineConfig({
	plugins: [tailwindcss(), paths({ projects: ['../tsconfig.json'] })],
});

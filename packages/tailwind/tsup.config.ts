import { copyFile } from 'node:fs/promises';

import { defineConfig } from 'tsup';

export default defineConfig([
	{
		clean: true,
		dts: true,
		entry: ['src/pallete.ts'],
		format: ['esm'],
		onSuccess: async () => {
			await copyFile('src/index.css', 'dist/index.css');
		},
		platform: 'neutral',
		sourcemap: true,
		splitting: true,
	},
]);

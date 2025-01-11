import { copyFile } from 'node:fs/promises';

import { defineConfig } from 'tsup';

export default defineConfig([
	{
		clean: true,
		dts: true,
		entry: ['src/class-name.ts', 'src/element.ts', 'src/properties.ts', 'src/react.tsx', 'src/variants.ts'],
		format: ['esm'],
		onSuccess: async () => {
			await copyFile('src/astro.astro', 'dist/astro.astro');
			await copyFile('src/astro.ts', 'dist/astro.ts');
		},
		platform: 'neutral',
		sourcemap: true,
		splitting: true,
	},
]);

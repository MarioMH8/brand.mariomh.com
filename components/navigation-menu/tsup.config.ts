import { cp } from 'node:fs/promises';

import { defineConfig } from 'tsup';

export default defineConfig([
	{
		clean: true,
		dts: true,
		entry: [
			'src/class-name/index.ts',
			'src/element/index.ts',
			'src/properties/index.ts',
			'src/react/index.ts',
			'src/variants/index.ts',
		],
		format: ['esm'],
		onSuccess: async () => {
			await cp('src/astro', 'dist/astro', { recursive: true });
		},
		platform: 'neutral',
		sourcemap: true,
		splitting: true,
	},
]);

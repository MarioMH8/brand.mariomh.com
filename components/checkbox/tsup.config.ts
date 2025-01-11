import { defineConfig } from 'tsup';

export default defineConfig([
	{
		clean: true,
		dts: true,
		entry: ['src/class-name.ts', 'src/element.ts', 'src/properties.ts', 'src/react.tsx', 'src/variants.ts'],
		format: ['esm'],
		platform: 'neutral',
		sourcemap: true,
		splitting: true,
	},
]);

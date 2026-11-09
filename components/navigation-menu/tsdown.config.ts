import { defineConfig } from 'tsdown';

export default defineConfig({
	clean: true,
	copy: [{ flatten: false, from: 'src/astro', to: 'dist' }],
	deps: { neverBundle: [/\.astro$/] },
	dts: true,
	entry: [
		'src/class-name/index.ts',
		'src/element/index.ts',
		'src/properties/index.ts',
		'src/react/index.ts',
		'src/variants/index.ts',
	],
	fixedExtension: true,
	format: ['esm'],
	platform: 'neutral',
	sourcemap: true,
});

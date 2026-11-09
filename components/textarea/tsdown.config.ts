import { defineConfig } from 'tsdown';

export default defineConfig({
	clean: true,
	copy: ['src/astro.astro', 'src/astro.ts'],
	deps: { neverBundle: [/\.astro$/] },
	dts: true,
	entry: ['src/class-name.ts', 'src/element.ts', 'src/properties.ts', 'src/react.tsx', 'src/variants.ts'],
	fixedExtension: true,
	format: ['esm'],
	platform: 'neutral',
	sourcemap: true,
});

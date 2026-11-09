import { defineConfig } from 'tsdown';

export default defineConfig({
	clean: true,
	dts: true,
	entry: ['src/class-name.ts', 'src/properties.ts', 'src/react.tsx', 'src/variants.ts'],
	fixedExtension: true,
	format: ['esm'],
	platform: 'neutral',
	sourcemap: true,
});

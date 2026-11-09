import { defineConfig } from 'tsdown';

export default defineConfig({
	clean: true,
	copy: ['index.css'],
	dts: true,
	entry: ['src/pallete.ts'],
	fixedExtension: true,
	format: ['esm'],
	platform: 'neutral',
	sourcemap: true,
});

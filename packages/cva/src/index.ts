import { defineConfig } from 'cva/config';
import { twMerge as merge } from 'tailwind-merge';

const { cva, cx } = defineConfig({ cx: merge });

export { cva, cx };

export default cva;

export { type VariantProps as VariantProperties } from 'cva';
export { twMerge as merge } from 'tailwind-merge';

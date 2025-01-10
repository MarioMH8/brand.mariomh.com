import type { VariantProperties } from '@mariomh/cva';
import cva from '@mariomh/cva';

const variants = cva({
	base: '',
	defaultVariants: {
		dimension: 'md',
	},
	variants: {
		dimension: {
			sm: 'shadow-sm',
			md: 'shadow-md',
			lg: 'shadow-lg',
			xl: 'shadow-xl',
		},
	},
});

export type ShadowVariantsProperties = VariantProperties<typeof variants>;

export default variants;

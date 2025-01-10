import type { VariantProperties } from '@mariomh/cva';
import cva from '@mariomh/cva';

const variants = cva({
	base: [
		'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
		'ring-offset-primary-background dark:ring-offset-primary-dark-background',
	],
	defaultVariants: {
		intent: 'primary',
	},
	variants: {
		intent: {
			primary: 'focus-visible:ring-primary-border',
		},
	},
});

export type FocusVariantsProperties = VariantProperties<typeof variants>;

export default variants;

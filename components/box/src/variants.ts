import type { VariantProperties } from '@mariomh8/cva';
import cva from '@mariomh8/cva';
import type { RoundVariantsProperties } from '@mariomh8/round/variants';

const variants = cva({
	base: 'p-4',
	defaultVariants: {
		intent: 'primary',
	},
	variants: {
		intent: {
			primary: 'bg-primary-background-element dark:text-primary-dark-foreground-invert',
		},
	},
});

export type BoxVariantsProperties = VariantProperties<typeof variants> & {
	round?: RoundVariantsProperties['dimension'];
};

export default variants;

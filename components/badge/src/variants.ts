import type { VariantProperties } from '@mariomh/cva';
import cva from '@mariomh/cva';
import type { FontVariantsProperties } from '@mariomh/font/variants';

const variants = cva({
	base: 'py-1 px-2 inline-block uppercase',
	compoundVariants: [],
	defaultVariants: {
		intent: 'primary',
	},
	variants: {
		intent: {
			primary: 'bg-primary-background-element dark:text-primary-dark-foreground-invert',
		},
	},
});

export type BadgeVariantsProperties = Partial<
	Pick<FontVariantsProperties, 'dimension' | 'family' | 'noSelect' | 'weight'>
> &
	VariantProperties<typeof variants>;

export default variants;

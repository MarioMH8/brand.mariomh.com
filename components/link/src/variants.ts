import type { VariantProperties } from '@mariomh/cva';
import cva from '@mariomh/cva';
import type { FontVariantsProperties } from '@mariomh/font/variants';

const variants = cva({
	base: 'inline-block underline-offset-4 hover:cursor-pointer hover:underline',
	defaultVariants: {
		intent: 'primary',
	},
	variants: {
		disabled: {
			true: 'opacity-50 hover:cursor-default hover:no-underline pointer-events-none',
		},
		intent: {
			primary: [
				'text-primary-foreground-highlight active:text-primary-foreground-muted',
				'dark:text-primary-dark-foreground-highlight dark:active:text-primary-dark-foreground-muted',
			],
		},
	},
});

export type LinkVariantsProperties = Partial<
	Pick<FontVariantsProperties, 'dimension' | 'family' | 'noSelect' | 'weight'>
> &
	VariantProperties<typeof variants>;

export default variants;

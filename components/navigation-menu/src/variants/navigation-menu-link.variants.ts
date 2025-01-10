import type { VariantProperties } from '@mariomh/cva';
import cva from '@mariomh/cva';

const variants = cva({
	base: [
		'dark:text-primary-dark-foreground text-primary-foreground',
		'py-4 px-6',
		'border-b-2 border-b-transparent',
		'hover:cursor-pointer',
		'hover:border-b-primary-foreground/50 hover:dark:border-b-primary/50',
		'focus-visible:outline-none',
		'focus-visible:border-b-primary-foreground/50 focus-visible:dark:border-b-primary/50',
		'max-lg:text-xl',
		'whitespace-nowrap',
	],
	compoundVariants: [],
	defaultVariants: {
		active: false,
	},
	variants: {
		active: {
			true: [
				'border-b-primary-foreground dark:border-b-primary',
				'hover:border-b-primary-foreground/75 hover:dark:border-b-primary/75',
				'focus-visible:border-b-primary-foreground/75 focus-visible:dark:border-b-primary/75',
			],
		},
	},
});

type NavigationMenuLinkVariantsProperties = VariantProperties<typeof variants>;

export type { NavigationMenuLinkVariantsProperties };

export default variants;

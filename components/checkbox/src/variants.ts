import type { VariantProperties } from '@mariomh8/cva';
import cva from '@mariomh8/cva';

const variants = cva({
	base: [
		'transition-colors',
		'border',
		'appearance-none flex items-center justify-center',
		'disabled:pointer-events-none disabled:opacity-50',
	],
	defaultVariants: {
		dimension: 'base',
		intent: 'primary',
	},
	variants: {
		dimension: {
			xs: 'h-4 w-4 [&_svg]:w-2 [&_svg]:h-2',
			sm: 'h-5 w-5 [&_svg]:w-3 [&_svg]:h-3',
			base: 'h-6 w-6 [&_svg]:w-4 [&_svg]:h-4',
			xl: 'h-10 w-10 [&_svg]:w-8 [&_svg]:h-8',
			lg: 'h-8 w-8 [&_svg]:w-6 [&_svg]:h-6',
			'2xl': 'h-12 w-12 [&_svg]:w-10 [&_svg]:h-10',
			'3xl': 'h-14 w-14 [&_svg]:w-12 [&_svg]:h-12',
			'4xl': 'h-16 w-16 [&_svg]:w-14 [&_svg]:h-14',
			unset: '',
		},
		intent: {
			primary: [
				'text-primary-foreground dark:text-primary-dark-foreground-invert',
				'border-primary-foreground dark:border-primary-dark',
				'active:bg-primary-background-active dark:active:bg-primary-dark-background-active',
				'not-active:data-[state=checked]:bg-primary-background-solid',
			],
		},
	},
});

export type CheckboxVariantsProperties = VariantProperties<typeof variants>;

export default variants;

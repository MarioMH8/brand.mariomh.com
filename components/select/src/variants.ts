import type { VariantProperties } from '@mariomh/cva';
import cva from '@mariomh/cva';

const variants = cva({
	base: 'flex w-full border disabled:cursor-not-allowed disabled:opacity-50',
	defaultVariants: {
		dimension: 'base',
		intent: 'primary',
	},
	variants: {
		dimension: {
			unset: '',
			xs: 'px-2 py-1',
			sm: 'px-3 py-2',
			base: 'px-4 py-3',
			lg: 'px-5 py-4',
			xl: 'px-6 py-5',
			'2xl': 'px-7 py-6',
			'3xl': 'px-8 py-7',
			'4xl': 'px-9 py-8',
			'5xl': 'px-10 py-9',
			'6xl': 'px-11 py-10',
		},
		intent: {
			primary: [
				'text-primary-foreground dark:text-primary-dark-foreground',
				'border-primary-foreground dark:border-primary-dark',
				'disabled:border-primary-foreground/50 disabled:dark:border-primary-dark-foreground/50',
			],
		},
	},
});

export type SelectVariantsProperties = VariantProperties<typeof variants>;

export default variants;

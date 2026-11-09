import type { VariantProperties } from '@mariomh8/cva';
import cva from '@mariomh8/cva';

const variants = cva({
	base: 'flex flex-row items-center justify-center',
	variants: {
		isotipo: {
			dark: '',
			light: '',
			primary: '',
		},
		logotipo: {
			dark: '',
			light: '',
			primary: '',
		},
		dimension: {
			xs: '',
			sm: '',
			base: '',
			lg: '',
		},
		variant: {
			isotipo: '',
			logotipo: '',
		},
	},
});

const pathVariants = cva({
	base: 'fill-primary-foreground dark:fill-primary-dark-foreground',
	variants: {
		isotipo: {
			dark: 'fill-primary-foreground dark:fill-primary-foreground',
			light: 'fill-primary-foreground-invert dark:fill-primary-foreground-invert',
			primary: 'fill-primary dark:fill-primary',
		},
	},
});

const svgVariants = cva({
	base: 'aspect-square',
	defaultVariants: {
		dimension: 'base',
	},
	variants: {
		dimension: {
			base: 'w-[calc(theme(--text-4xl)_*_3)] m-[theme(--text-4xl)]',
			lg: 'w-[calc(theme(--text-6xl)_*_3)] m-[theme(--text-6xl)]',
			sm: 'w-[calc(theme(--text-2xl)_*_3)] m-[theme(--text-2xl)]',
			xs: 'w-[calc(theme(--text-lg)_*_3)] m-[theme(--text-lg)]',
		},
		variant: {
			isotipo: '',
			logotipo: 'hidden',
		},
	},
});

const textVariants = cva({
	base: 'text-left whitespace-nowrap',
	compoundVariants: [
		{
			className: 'm-[theme(--text-lg)]',
			dimension: 'xs',
			variant: 'logotipo',
		},
		{
			className: 'm-[theme(--text-2xl)]',
			dimension: 'sm',
			variant: 'logotipo',
		},
		{
			className: 'm-[theme(--text-4xl)]',
			dimension: 'base',
			variant: 'logotipo',
		},
		{
			className: 'mr-[theme(--text-6xl)]',
			dimension: 'lg',
			variant: 'logotipo',
		},
	],
	defaultVariants: {
		dimension: 'base',
	},
	variants: {
		logotipo: {
			dark: 'text-primary-foreground dark:text-primary-foreground',
			light: 'text-primary-foreground-invert dark:text-primary-foreground-invert',
			primary: 'text-primary dark:text-primary-dark',
		},
		dimension: {
			base: 'text-4xl mr-[theme(--text-4xl)] leading-[theme(--text-5xl)]',
			lg: 'text-6xl mr-[theme(--text-6xl)] leading-[theme(--text-7xl)]',
			sm: 'text-2xl mr-[theme(--text-2xl)] leading-[theme(--text-3xl)]',
			xs: 'text-lg mr-[theme(--text-lg)] leading-[theme(--text-xl)]',
		},
		variant: {
			isotipo: 'hidden',
			logotipo: '',
		},
	},
});

export type LogoVariantsProperties = VariantProperties<typeof variants>;

export { pathVariants, svgVariants, textVariants };

export default variants;

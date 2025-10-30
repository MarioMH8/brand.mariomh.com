import type { VariantProperties } from '@mariomh/cva';
import cva from '@mariomh/cva';
import type { FontVariantsProperties } from '@mariomh/font/variants';

const variants = cva({
	base: [
		'transition-colors',
		'inline-flex items-center justify-center',
		'disabled:pointer-events-none disabled:opacity-50',
		'border',
	],
	compoundVariants: [
		{
			className: 'px-6 py-2.5',
			icon: undefined,
			dimension: 'xs',
		},
		{
			className: 'px-8 py-3',
			icon: undefined,
			dimension: 'sm',
		},
		{
			className: 'px-10 py-3.5',
			icon: undefined,
			dimension: 'base',
		},
		{
			className: 'px-12 py-4',
			icon: undefined,
			dimension: 'lg',
		},
		{
			className: 'px-14 py-4.5',
			icon: undefined,
			dimension: 'xl',
		},
		{
			className: 'px-16 py-5',
			icon: undefined,
			dimension: '2xl',
		},
		{
			className: 'px-18 py-5.5',
			icon: undefined,
			dimension: '3xl',
		},
		{
			className: 'px-20 py-6',
			icon: undefined,
			dimension: '4xl',
		},
		{
			className: 'px-22 py-6.5',
			icon: undefined,
			dimension: '5xl',
		},
		{
			className: 'px-24 py-7',
			icon: undefined,
			dimension: '6xl',
		},
		{
			className: 'h-8',
			icon: true,
			dimension: 'xs',
		},
		{
			className: 'h-10',
			icon: true,
			dimension: 'sm',
		},
		{
			className: 'h-14',
			icon: true,
			dimension: 'base',
		},
		{
			className: 'h-20',
			icon: true,
			dimension: 'lg',
		},
		{
			className: 'h-28',
			icon: true,
			dimension: 'xl',
		},
		{
			className: 'h-36',
			icon: true,
			dimension: '2xl',
		},
		{
			className: 'h-44',
			icon: true,
			dimension: '3xl',
		},
		{
			className: 'h-52',
			icon: true,
			dimension: '4xl',
		},
		{
			intent: 'primary',
			variant: 'solid',
			className: [
				'bg-primary dark:bg-primary-dark',
				'dark:text-primary-dark-invert',
				'dark:hover:text-primary-dark',
				'dark:active:text-primary-dark',
			],
		},
	],
	defaultVariants: {
		dimension: 'base',
		intent: 'primary',
	},
	variants: {
		icon: {
			true: 'aspect-square',
		},
		dimension: {
			xs: '',
			sm: '',
			base: '',
			lg: '',
			xl: '',
			'2xl': '',
			'3xl': '',
			'4xl': '',
			'5xl': '',
			'6xl': '',
			unset: '',
		},
		intent: {
			primary: [
				'bg-transparent',
				'hover:bg-primary-background-hover dark:hover:bg-primary-dark-background-hover',
				'active:bg-primary-background-active dark:active:bg-primary-dark-background-active',
				'text-primary-foreground dark:text-primary-dark',
			],
		},
		variant: {
			solid: 'border-0',
		},
	},
});

export type ButtonVariantsProperties = Partial<
	Pick<FontVariantsProperties, 'dimension' | 'family' | 'noSelect' | 'weight'>
> &
	VariantProperties<typeof variants>;

export default variants;

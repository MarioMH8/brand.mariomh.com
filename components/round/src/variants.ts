import type { VariantProperties } from '@mariomh/cva';
import cva from '@mariomh/cva';

const variants = cva({
	base: '',
	compoundVariants: [
		{
			className: '',
			dimension: 'unset',
			only: undefined,
		},
		{
			className: 'rounded-sm',
			dimension: 'xs',
			only: undefined,
		},
		{
			className: 'rounded-md',
			dimension: 'sm',
			only: undefined,
		},
		{
			className: 'rounded-lg',
			dimension: 'base',
			only: undefined,
		},
		{
			className: 'rounded-xl',
			dimension: 'lg',
			only: undefined,
		},
		{
			className: 'rounded-2xl',
			dimension: 'xl',
			only: undefined,
		},
		{
			className: 'rounded-3xl',
			dimension: '2xl',
			only: undefined,
		},
		{
			className: 'rounded-4xl',
			dimension: '3xl',
			only: undefined,
		},
		{
			className: 'rounded-5xl',
			dimension: '4xl',
			only: undefined,
		},
		{
			className: 'rounded-6xl',
			dimension: '5xl',
			only: undefined,
		},
		{
			className: 'rounded-7xl',
			dimension: '6xl',
			only: undefined,
		},
		{
			className: 'rounded-full',
			dimension: 'full',
			only: undefined,
		},
		{
			className: '',
			dimension: 'unset',
			only: 'sm',
		},
		{
			className: 'sm:rounded-sm',
			dimension: 'xs',
			only: 'sm',
		},
		{
			className: 'sm:rounded-md',
			dimension: 'sm',
			only: 'sm',
		},
		{
			className: 'sm:rounded-lg',
			dimension: 'base',
			only: 'sm',
		},
		{
			className: 'sm:rounded-xl',
			dimension: 'lg',
			only: 'sm',
		},
		{
			className: 'sm:rounded-2xl',
			dimension: 'xl',
			only: 'sm',
		},
		{
			className: 'sm:rounded-3xl',
			dimension: '2xl',
			only: 'sm',
		},
		{
			className: 'sm:rounded-3xl',
			dimension: '3xl',
			only: 'sm',
		},
		{
			className: 'sm:rounded-3xl',
			dimension: '4xl',
			only: 'sm',
		},
		{
			className: 'sm:rounded-4xl',
			dimension: '5xl',
			only: 'sm',
		},
		{
			className: 'sm:rounded-5xl',
			dimension: '6xl',
			only: 'sm',
		},
		{
			className: 'sm:rounded-full',
			dimension: 'full',
			only: 'sm',
		},
	],
	defaultVariants: {
		dimension: 'base',
	},
	variants: {
		dimension: {
			unset: '',
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
			full: '',
		},
		only: {
			sm: '',
		},
	},
});

export type RoundVariantsProperties = VariantProperties<typeof variants>;

export default variants;

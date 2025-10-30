import type { VariantProperties } from '@mariomh/cva';
import cva from '@mariomh/cva';
import type { FontVariantsProperties } from '@mariomh/font/variants';

const variants = cva({
	base: [
		'flex',
		'w-full',
		'border',
		'file:border-0 file:bg-transparent file:text-sm file:font-medium',
		'disabled:cursor-not-allowed disabled:opacity-50',
	],
	compoundVariants: [
		{
			className:
				'h-4 checked:after:mt-[0.15rem] checked:after:ml-[0.3rem] checked:after:h-[0.5rem] checked:after:w-[0.275rem]',
			dimension: 'xs',
			type: 'checkbox',
		},
		{
			className:
				'h-5 checked:after:mt-[0.2rem] checked:after:ml-[0.4rem] checked:after:h-[0.6rem] checked:after:w-[0.275rem]',
			dimension: 'sm',
			type: 'checkbox',
		},
		{
			className:
				'h-6 checked:after:mt-[0.2rem] checked:after:ml-[0.5rem] checked:after:h-[0.8rem] checked:after:w-[0.375rem]',
			dimension: 'base',
			type: 'checkbox',
		},
		{
			className:
				'h-8 checked:after:mt-[0.3rem] checked:after:ml-[0.7rem] checked:after:h-[1rem] checked:after:w-[0.5rem]',
			dimension: 'lg',
			type: 'checkbox',
		},
		{
			className:
				'h-10 checked:after:mt-[0.4rem] checked:after:ml-[0.9rem] checked:after:h-[1.2rem] checked:after:w-[0.625rem]',
			dimension: 'xl',
			type: 'checkbox',
		},
		{
			className:
				'h-12 checked:after:mt-[0.5rem] checked:after:ml-[1rem] checked:after:h-[1.4rem] checked:after:w-[0.75rem]',
			dimension: '2xl',
			type: 'checkbox',
		},
		{
			className:
				'h-14 checked:after:mt-[0.65rem] checked:after:ml-[1.15rem] checked:after:h-[1.6rem] checked:after:w-[0.875rem]',
			dimension: '3xl',
			type: 'checkbox',
		},
		{
			className:
				'h-16 checked:after:mt-[0.8rem] checked:after:ml-[1.3rem] checked:after:h-[1.8rem] checked:after:w-[1rem]',
			dimension: '4xl',
			type: 'checkbox',
		},
		{
			className: [
				'text-primary-foreground dark:text-primary-dark-foreground-invert',
				'border-primary-foreground dark:border-primary-dark',
				'active:bg-primary-background-active dark:active:bg-primary-dark-background-active',
				'not-active:checked:bg-primary-background-solid',
			],
			type: 'checkbox',
			intent: 'primary',
		},
	],
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
		type: {
			checkbox: [
				'p-0',
				'aspect-square appearance-none',
				`checked:after:content-[''] checked:after:absolute checked:after:block checked:after:rotate-45`,
				`checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white`,
				`checked:after:bg-transparent`,
			],
		},
		intent: {
			primary: [
				'text-primary-foreground dark:text-primary-dark-foreground',
				'border-primary-foreground dark:border-primary-dark',
				'disabled:border-primary-foreground/50 disabled:dark:border-primary-dark-foreground/50',
				'placeholder:font-light',
				'placeholder:text-primary-foreground/75 dark:placeholder:text-primary-dark-foreground/75',
			],
		},
	},
});

export type InputVariantsProperties = Partial<Pick<FontVariantsProperties, 'family' | 'weight'>> &
	VariantProperties<typeof variants>;

export default variants;

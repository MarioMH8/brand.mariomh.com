import type { VariantProperties } from '@mariomh/cva';
import cva from '@mariomh/cva';
import type { FontVariantsProperties } from '@mariomh/font/variants';

const variants = cva({
	base: 'block mb-6',
	defaultVariants: {
		wrap: true,
	},
	variants: {
		wrap: {
			true: 'max-w-[75ch]',
			false: '!max-w-none',
		},
	},
});

export type ParagraphVariantsProperties = Partial<
	Pick<FontVariantsProperties, 'align' | 'dimension' | 'family' | 'noSelect' | 'variant' | 'weight'>
> &
	VariantProperties<typeof variants>;

export default variants;

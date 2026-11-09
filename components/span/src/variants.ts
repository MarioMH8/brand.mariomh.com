import type { VariantProperties } from '@mariomh8/cva';
import cva from '@mariomh8/cva';
import type { FontVariantsProperties } from '@mariomh8/font/variants';

const variants = cva({});

export type SpanVariantsProperties = Partial<
	Pick<FontVariantsProperties, 'dimension' | 'family' | 'noSelect' | 'variant' | 'weight'>
> &
	VariantProperties<typeof variants>;

export default variants;

import type { VariantProperties } from '@mariomh/cva';
import cva from '@mariomh/cva';
import type { FontVariantsProperties } from '@mariomh/font/variants';

const variants = cva({});

export type SpanVariantsProperties = Partial<
	Pick<FontVariantsProperties, 'dimension' | 'noSelect' | 'variant' | 'weight'>
> &
	VariantProperties<typeof variants>;

export default variants;

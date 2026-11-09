import type { VariantProperties } from '@mariomh8/cva';
import cva from '@mariomh8/cva';
import type { FontVariantsProperties } from '@mariomh8/font/variants';

const variants = cva({});

export type CopyrightVariantsProperties = Partial<
	Pick<FontVariantsProperties, 'dimension' | 'family' | 'noSelect' | 'weight'>
> &
	VariantProperties<typeof variants> & {
		from?: number | string;
		to?: number | string;
	};

export default variants;

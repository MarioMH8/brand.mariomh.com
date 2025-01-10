import type { VariantProperties } from '@mariomh/cva';
import cva from '@mariomh/cva';
import type { FontVariantsProperties } from '@mariomh/font/variants';

const variants = cva({});

export type CopyrightVariantsProperties = Partial<Pick<FontVariantsProperties, 'dimension' | 'noSelect'>> &
	VariantProperties<typeof variants> & {
		from?: number | string;
		to?: number | string;
	};

export default variants;

import { merge } from '@mariomh8/cva';
import font from '@mariomh8/font/variants';

import type { ParagraphVariantsProperties } from './variants';
import variants from './variants';

export default function cn(properties?: ParagraphVariantsProperties, ...classLists: Parameters<typeof merge>): string {
	return merge(
		font({
			align: properties?.align,
			dimension: properties?.dimension,
			family: properties?.family,
			noSelect: properties?.noSelect,
			variant: properties?.variant,
			weight: properties?.weight,
		}),
		variants(properties),
		...classLists
	);
}

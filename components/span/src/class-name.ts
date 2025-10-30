import { merge } from '@mariomh/cva';
import font from '@mariomh/font/variants';

import type { SpanVariantsProperties } from './variants';
import variants from './variants';

export default function cn(properties?: SpanVariantsProperties, ...classLists: Parameters<typeof merge>): string {
	return merge(
		font({
			dimension: properties?.dimension,
			family: properties?.family ?? 'secondary',
			noSelect: properties?.noSelect,
			variant: properties?.variant,
			weight: properties?.weight,
		}),
		variants({}),
		...classLists
	);
}

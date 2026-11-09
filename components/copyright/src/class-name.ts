import { merge } from '@mariomh8/cva';
import font from '@mariomh8/font/variants';

import type { CopyrightVariantsProperties } from './variants';
import variants from './variants';

export default function cn(properties?: CopyrightVariantsProperties, ...classLists: Parameters<typeof merge>): string {
	return merge(
		font({
			dimension: properties?.dimension,
			family: properties?.family ?? 'secondary',
			noSelect: properties?.noSelect,
			weight: properties?.weight ?? 'light',
		}),
		variants({}),
		...classLists
	);
}

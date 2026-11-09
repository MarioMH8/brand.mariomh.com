import { merge } from '@mariomh8/cva';

import type { FontVariantsProperties } from './variants';
import variants from './variants';

export default function cn(properties?: FontVariantsProperties, ...classLists: Parameters<typeof merge>): string {
	return merge(variants({ ...properties }), ...classLists);
}

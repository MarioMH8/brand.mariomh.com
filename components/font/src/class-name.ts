import { merge } from '@mariomh/cva';

import type { FontVariantsProperties } from './variants';
import variants from './variants';

export default function cn(properties?: FontVariantsProperties, ...classLists: Parameters<typeof merge>): string {
	return merge(variants({ ...properties }), ...classLists);
}

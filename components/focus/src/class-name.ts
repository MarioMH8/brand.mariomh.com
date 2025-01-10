import { merge } from '@mariomh/cva';

import type { FocusVariantsProperties } from './variants';
import variants from './variants';

export default function cn(properties?: FocusVariantsProperties, ...classLists: Parameters<typeof merge>): string {
	return merge(variants({ ...properties }), ...classLists);
}

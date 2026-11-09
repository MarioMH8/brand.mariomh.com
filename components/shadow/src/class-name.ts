import { merge } from '@mariomh8/cva';

import type { ShadowVariantsProperties } from './variants';
import variants from './variants';

export default function cn(properties?: ShadowVariantsProperties, ...classLists: Parameters<typeof merge>): string {
	return merge(variants({ ...properties }), ...classLists);
}

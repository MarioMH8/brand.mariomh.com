import { merge } from '@mariomh8/cva';

import type { RoundVariantsProperties } from './variants';
import variants from './variants';

export default function cn(properties?: RoundVariantsProperties, ...classLists: Parameters<typeof merge>): string {
	return merge(variants({ ...properties }), ...classLists);
}

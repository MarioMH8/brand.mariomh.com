import { merge } from '@mariomh/cva';
import roundVariants from '@mariomh/round/variants';

import type { BoxVariantsProperties } from './variants';
import variants from './variants';

export default function cn(properties?: BoxVariantsProperties, ...classLists: Parameters<typeof merge>): string {
	return merge(roundVariants({ dimension: properties?.round }), variants(properties), ...classLists);
}

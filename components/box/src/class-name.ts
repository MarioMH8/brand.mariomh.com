import { merge } from '@mariomh8/cva';
import roundVariants from '@mariomh8/round/variants';

import type { BoxVariantsProperties } from './variants';
import variants from './variants';

export default function cn(properties?: BoxVariantsProperties, ...classLists: Parameters<typeof merge>): string {
	return merge(roundVariants({ dimension: properties?.round }), variants(properties), ...classLists);
}

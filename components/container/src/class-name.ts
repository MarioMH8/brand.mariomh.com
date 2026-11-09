import { merge } from '@mariomh8/cva';

import type { ContainerVariantsProperties } from './variants';
import variants from './variants';

export default function cn(properties?: ContainerVariantsProperties, ...classLists: Parameters<typeof merge>): string {
	return merge(variants(properties), ...classLists);
}

import { merge } from '@mariomh/cva';

import type { ContainerVariantsProperties } from './variants';
import variants from './variants';

export default function cn(properties?: ContainerVariantsProperties, ...classLists: Parameters<typeof merge>): string {
	return merge(variants(properties), ...classLists);
}

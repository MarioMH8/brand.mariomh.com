import { merge } from '@mariomh8/cva';

import type { NavigationMenuULVariantsProperties } from '../variants';
import { variantsNavigationMenuUL } from '../variants';

export default function cn(
	properties: NavigationMenuULVariantsProperties = {},
	...classLists: Parameters<typeof merge>
): string {
	return merge(variantsNavigationMenuUL(properties), ...classLists);
}

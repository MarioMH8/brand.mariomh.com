import { merge } from '@mariomh/cva';

import type { NavigationMenuLIVariantsProperties } from '../variants';
import { variantsNavigationMenuLI } from '../variants';

export default function cn(
	properties: NavigationMenuLIVariantsProperties = {},
	...classLists: Parameters<typeof merge>
): string {
	return merge(variantsNavigationMenuLI(properties), ...classLists);
}

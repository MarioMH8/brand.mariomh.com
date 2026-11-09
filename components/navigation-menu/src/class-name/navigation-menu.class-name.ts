import variantsContainer from '@mariomh8/container/variants';
import { merge } from '@mariomh8/cva';

import type { NavigationMenuVariantsProperties } from '../variants';
import { variantsNavigationMenu } from '../variants';

export default function cn(
	properties: NavigationMenuVariantsProperties = {},
	...classLists: Parameters<typeof merge>
): string {
	return merge(variantsContainer(), variantsNavigationMenu(properties), ...classLists);
}

import variantsContainer from '@mariomh/container/variants';
import { merge } from '@mariomh/cva';

import type { NavigationMenuVariantsProperties } from '../variants';
import { variantsNavigationMenu } from '../variants';

export default function cn(
	properties: NavigationMenuVariantsProperties = {},
	...classLists: Parameters<typeof merge>
): string {
	return merge(variantsContainer(), variantsNavigationMenu(properties), ...classLists);
}

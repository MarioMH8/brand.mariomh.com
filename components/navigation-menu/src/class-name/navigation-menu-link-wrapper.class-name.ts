import { merge } from '@mariomh/cva';

import type { NavigationMenuLinkWrapperVariantsProperties } from '../variants';
import { variantsNavigationMenuLinkWrapper } from '../variants';

export default function cn(
	properties: NavigationMenuLinkWrapperVariantsProperties = {},
	...classLists: Parameters<typeof merge>
): string {
	return merge(variantsNavigationMenuLinkWrapper(properties), 'container', ...classLists);
}

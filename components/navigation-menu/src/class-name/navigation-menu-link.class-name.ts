import { merge } from '@mariomh8/cva';
import fontVariants from '@mariomh8/font/variants';

import type { NavigationMenuLinkVariantsProperties } from '../variants';
import { variantsNavigationMenuLink } from '../variants';

export default function cn(
	properties: NavigationMenuLinkVariantsProperties = {},
	...classNames: Parameters<typeof merge>
): string {
	return merge(
		fontVariants({
			family: 'secondary',
		}),
		variantsNavigationMenuLink(properties),
		...classNames
	);
}

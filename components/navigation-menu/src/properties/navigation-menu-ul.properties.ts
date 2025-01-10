import type { AstroNavigationMenuULProperties } from '../astro';
import { classNameNavigationMenuUL } from '../class-name';
import { NAVIGATION_MENU_UL_ELEMENT } from '../element';
import type { ReactNavigationMenuULProperties } from '../react';
import type { NavigationMenuULVariantsProperties } from '../variants';

export default function properties<
	T extends AstroNavigationMenuULProperties<typeof NAVIGATION_MENU_UL_ELEMENT> | ReactNavigationMenuULProperties,
>(p?: NavigationMenuULVariantsProperties & T): T {
	if (!p) {
		return {
			className: classNameNavigationMenuUL(p),
		} as T;
	}

	const {
		asChild: _asChild,
		class: cls1,
		className: cls2,
		...rest
	} = p as AstroNavigationMenuULProperties<typeof NAVIGATION_MENU_UL_ELEMENT> & ReactNavigationMenuULProperties;

	return {
		...rest,
		className: classNameNavigationMenuUL(p satisfies T, cls1, cls2),
	} as T;
}

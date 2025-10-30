import type { AstroLinkProperties } from './astro';
import cn from './class-name';
import type ELEMENT_TYPE from './element';
import type { ReactLinkProperties } from './react';
import type { LinkVariantsProperties } from './variants';

export default function properties<T extends AstroLinkProperties<typeof ELEMENT_TYPE> | ReactLinkProperties>(
	p?: LinkVariantsProperties & T
): T {
	if (!p) {
		return {
			className: cn(p),
		} as T;
	}

	const {
		asChild: _asChild,
		class: cls1,
		className: cls2,
		dimension: _dimension,
		disabled: _disabled,
		family: _family,
		intent: _intent,
		noSelect: _noSelect,
		weight: _weight,
		...rest
	} = p as AstroLinkProperties<typeof ELEMENT_TYPE> & ReactLinkProperties;

	return {
		...rest,
		className: cn(p satisfies T, cls1, cls2),
	} as T;
}

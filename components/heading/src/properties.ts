import type { AstroHeadingProperties } from './astro';
import cn from './class-name';
import type ELEMENT_TYPE from './element';
import type { ReactHeadingProperties } from './react';
import type { HeadingVariantsProperties } from './variants';

export default function properties<T extends AstroHeadingProperties<typeof ELEMENT_TYPE> | ReactHeadingProperties>(
	p?: HeadingVariantsProperties & T
): T {
	if (!p) {
		return {
			className: cn(p),
		} as T;
	}

	const {
		align: _align,
		asChild: _asChild,
		class: cls1,
		className: cls2,
		heading: _heading,
		huge: _huge,
		noSelect: _noSelect,
		subtitle: _subtitle,
		weight: _weight,
		...rest
	} = p as AstroHeadingProperties<typeof ELEMENT_TYPE> & ReactHeadingProperties;

	return {
		...rest,
		className: cn(p satisfies T, cls1, cls2),
	} as T;
}

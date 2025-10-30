import type { AstroLabelProperties } from './astro';
import cn from './class-name';
import type ELEMENT_TYPE from './element';
import type { ReactLabelProperties } from './react';
import type { LabelVariantsProperties } from './variants';

export default function properties<T extends AstroLabelProperties<typeof ELEMENT_TYPE> | ReactLabelProperties>(
	p?: LabelVariantsProperties & T
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
		family: _family,
		noSelect: _noSelect,
		weight: _weight,
		...rest
	} = p as AstroLabelProperties<typeof ELEMENT_TYPE> & ReactLabelProperties;

	return {
		...rest,
		className: cn(p satisfies T, cls1, cls2),
	} as T;
}

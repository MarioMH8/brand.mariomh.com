import type { AstroButtonProperties } from './astro';
import cn from './class-name';
import type ELEMENT_TYPE from './element';
import type { ReactButtonProperties } from './react';
import type { ButtonVariantsProperties } from './variants';

export default function properties<T extends AstroButtonProperties<typeof ELEMENT_TYPE> | ReactButtonProperties>(
	p?: ButtonVariantsProperties & T
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
		icon: _icon,
		intent: _intent,
		noSelect: _noSelect,
		variant: _variant,
		weight: _weight,
		...rest
	} = p as AstroButtonProperties<typeof ELEMENT_TYPE> & ReactButtonProperties;

	return {
		...rest,
		className: cn(p satisfies T, cls1, cls2),
	} as T;
}

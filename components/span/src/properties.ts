import type { AstroSpanProperties } from './astro';
import cn from './class-name';
import type ELEMENT_TYPE from './element';
import type { ReactSpanProperties } from './react';
import type { SpanVariantsProperties } from './variants';

export default function properties<T extends AstroSpanProperties<typeof ELEMENT_TYPE> | ReactSpanProperties>(
	p?: SpanVariantsProperties & T
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
		variant: _variant,
		weight: _weight,
		...rest
	} = p as AstroSpanProperties<typeof ELEMENT_TYPE> & ReactSpanProperties;

	return {
		...rest,
		className: cn(p satisfies T, cls1, cls2),
	} as T;
}

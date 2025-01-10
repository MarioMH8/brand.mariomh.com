import type { AstroBoxProperties } from './astro';
import cn from './class-name';
import type ELEMENT_TYPE from './element';
import type { ReactBoxProperties } from './react';
import type { BoxVariantsProperties } from './variants';

export default function properties<T extends AstroBoxProperties<typeof ELEMENT_TYPE> | ReactBoxProperties>(
	p?: BoxVariantsProperties & T
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
		intent: _intent,
		round: _round,
		...rest
	} = p as AstroBoxProperties<typeof ELEMENT_TYPE> & ReactBoxProperties;

	return {
		...rest,
		className: cn(p satisfies T, cls1, cls2),
	} as T;
}

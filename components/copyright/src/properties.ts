import type { AstroCopyrightProperties } from './astro';
import cn from './class-name';
import type ELEMENT_TYPE from './element';
import type { ReactCopyrightProperties } from './react';
import type { CopyrightVariantsProperties } from './variants';

export default function properties<T extends AstroCopyrightProperties<typeof ELEMENT_TYPE> | ReactCopyrightProperties>(
	p?: CopyrightVariantsProperties & T
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
		from: _from,
		noSelect: _noSelect,
		to: _to,
		...rest
	} = p as AstroCopyrightProperties<typeof ELEMENT_TYPE> & ReactCopyrightProperties;

	return {
		...rest,
		className: cn(p satisfies T, cls1, cls2),
	} as T;
}

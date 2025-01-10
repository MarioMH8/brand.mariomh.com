import type { AstroContainerProperties } from './astro';
import cn from './class-name';
import type ELEMENT_TYPE from './element';
import type { ReactContainerProperties } from './react';
import type { ContainerVariantsProperties } from './variants';

export default function properties<T extends AstroContainerProperties<typeof ELEMENT_TYPE> | ReactContainerProperties>(
	p?: ContainerVariantsProperties & T
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
		...rest
	} = p as AstroContainerProperties<typeof ELEMENT_TYPE> & ReactContainerProperties;

	return {
		...rest,
		className: cn(p satisfies T, cls1, cls2),
	} as T;
}

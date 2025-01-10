import type { AstroInputProperties } from './astro';
import cn from './class-name';
import type ELEMENT_TYPE from './element';
import type { ReactInputProperties } from './react';
import type { InputVariantsProperties } from './variants';

export default function properties<T extends AstroInputProperties<typeof ELEMENT_TYPE> | ReactInputProperties>(
	p?: Omit<InputVariantsProperties, 'type'> & T
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
		intent: _intent,
		...rest
	} = p as AstroInputProperties<typeof ELEMENT_TYPE> & ReactInputProperties;

	return {
		...rest,
		// @ts-expect-error TS2345: Argument of type Omit<InputVariantsProperties, 'type'> & T is not assignable to parameter of type InputVariantsProperties | undefined
		className: cn(p satisfies T, cls1, cls2),
	} as T;
}

import type { AstroTextareaProperties } from './astro';
import cn from './class-name';
import type ELEMENT_TYPE from './element';
import type { ReactTextareaProperties } from './react';
import type { TextareaVariantsProperties } from './variants';

export default function properties<T extends AstroTextareaProperties<typeof ELEMENT_TYPE> | ReactTextareaProperties>(
	p?: Omit<TextareaVariantsProperties, 'type'> & T
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
	} = p as AstroTextareaProperties<typeof ELEMENT_TYPE> & ReactTextareaProperties;

	return {
		...rest,
		className: cn(p satisfies T, cls1, cls2),
	} as T;
}

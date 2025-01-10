import cn from './class-name';
import type { ReactCheckboxProperties } from './react';
import type { CheckboxVariantsProperties } from './variants';

export default function properties<T extends ReactCheckboxProperties>(p?: CheckboxVariantsProperties & T): T {
	if (!p) {
		return {
			className: cn(p),
		} as T;
	}

	const {
		className: cls1,
		dimension: _dimension,
		iconLabel: _iconLabel,
		intent: _intent,
		...rest
	} = p as ReactCheckboxProperties;

	return {
		...rest,
		className: cn(p satisfies T, cls1),
	} as T;
}

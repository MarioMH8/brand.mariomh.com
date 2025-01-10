import { merge } from '@mariomh/cva';
import focusVariants from '@mariomh/focus/variants';
import roundVariants from '@mariomh/round/variants';

import type { CheckboxVariantsProperties } from './variants';
import variants from './variants';

function roundSize(properties: CheckboxVariantsProperties): CheckboxVariantsProperties['dimension'] {
	switch (properties.dimension) {
		case '2xl':
		case '3xl':
		case '4xl': {
			return 'xl';
		}
		case 'base':
		case 'lg':
		case undefined:
		case 'xl': {
			return 'base';
		}
		case 'sm':
		case 'unset':
		case 'xs': {
			return 'base';
		}
	}
}

export default function cn(
	properties: CheckboxVariantsProperties = {},
	...classLists: Parameters<typeof merge>
): string {
	return merge(
		focusVariants(properties),
		roundVariants({ dimension: roundSize(properties) }),
		variants({ ...properties }),
		...classLists
	);
}

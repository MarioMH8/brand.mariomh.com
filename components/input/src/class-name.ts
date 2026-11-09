import { merge } from '@mariomh8/cva';
import focusVariants from '@mariomh8/focus/variants';
import fontVariants from '@mariomh8/font/variants';
import type { RoundVariantsProperties } from '@mariomh8/round/variants';
import roundVariants from '@mariomh8/round/variants';

import type { InputVariantsProperties } from './variants';
import variants from './variants';

function getRoundDimension(dimension: InputVariantsProperties['dimension']): RoundVariantsProperties['dimension'] {
	if (!dimension) {
		return 'base';
	}
	switch (dimension) {
		case '2xl':
		case 'lg':
		case 'xl': {
			return 'lg';
		}
		case '3xl':
		case '4xl':
		case '5xl': {
			return 'xl';
		}
		case '6xl': {
			return '2xl';
		}
		case 'base':
		case 'sm':
		case 'xs': {
			return dimension;
		}
		case 'unset': {
			return 'base';
		}
	}
}

export default function cn(properties: InputVariantsProperties = {}, ...classLists: Parameters<typeof merge>): string {
	return merge(
		fontVariants({
			dimension: properties.dimension,
			family: properties.family ?? 'secondary',
			weight: properties.weight ?? 'base',
		}),
		roundVariants({ dimension: getRoundDimension(properties.dimension) }),
		focusVariants(properties),
		variants({ ...properties, type: properties.type === 'checkbox' ? 'checkbox' : undefined }),
		...classLists
	);
}

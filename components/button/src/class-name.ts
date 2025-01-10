import { merge } from '@mariomh/cva';
import focusVariants from '@mariomh/focus/variants';
import fontVariants from '@mariomh/font/variants';
import type { RoundVariantsProperties } from '@mariomh/round/variants';
import roundVariants from '@mariomh/round/variants';

import type { ButtonVariantsProperties } from './variants';
import variants from './variants';

function getRoundDimension(dimension: ButtonVariantsProperties['dimension']): RoundVariantsProperties['dimension'] {
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

export default function cn(properties: ButtonVariantsProperties = {}, ...classLists: Parameters<typeof merge>): string {
	return merge(
		fontVariants({
			dimension: properties.dimension,
			family: 'secondary',
			noSelect: properties.noSelect,
			weight: properties.weight,
		}),
		roundVariants({ dimension: properties.icon ? 'full' : getRoundDimension(properties.dimension) }),
		focusVariants(properties),
		variants(properties),
		classLists
	);
}

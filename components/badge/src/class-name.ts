import { merge } from '@mariomh/cva';
import fontVariants from '@mariomh/font/variants';
import type { RoundVariantsProperties } from '@mariomh/round/variants';
import roundVariants from '@mariomh/round/variants';

import type { BadgeVariantsProperties } from './variants';
import variants from './variants';

function getRoundDimension(dimension: BadgeVariantsProperties['dimension']): RoundVariantsProperties['dimension'] {
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
		case '6xl':
		case 'huge': {
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
export default function cn(properties?: BadgeVariantsProperties, ...classLists: Parameters<typeof merge>): string {
	const dimension = properties?.dimension ?? 'sm';
	const family = properties?.family ?? 'secondary';

	return merge(
		fontVariants({
			dimension,
			family,
			noSelect: properties?.noSelect,
			weight: properties?.weight,
		}),
		roundVariants({ dimension: getRoundDimension(dimension) }),
		variants(properties),
		...classLists
	);
}

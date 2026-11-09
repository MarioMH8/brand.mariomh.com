import { merge } from '@mariomh8/cva';
import type { FontVariantsProperties } from '@mariomh8/font/variants';
import fontVariants from '@mariomh8/font/variants';

import type { AstroHeadingProperties } from './astro';
import type ELEMENT_TYPE from './element';
import type { HeadingVariantsProperties } from './variants';
import variants from './variants';

function getDimension(
	properties: Partial<AstroHeadingProperties<typeof ELEMENT_TYPE> & HeadingVariantsProperties>
): FontVariantsProperties['dimension'] {
	if (properties.huge) {
		return 'unset';
	}
	const size = properties.heading ?? properties.as ?? 'h1';
	if (properties.subtitle) {
		switch (size) {
			case 'h1': {
				return '4xl';
			}
			case 'h2': {
				return '2xl';
			}
			case 'h3': {
				return 'xl';
			}
			case 'h4': {
				return 'base';
			}
			case 'h5': {
				return 'sm';
			}
			default: {
				return 'xs';
			}
		}
	}
	switch (size) {
		case 'h1': {
			return '6xl';
		}
		case 'h2': {
			return '4xl';
		}
		case 'h3': {
			return '3xl';
		}
		case 'h4': {
			return '2xl';
		}
		case 'h5': {
			return 'lg';
		}
		default: {
			return 'base';
		}
	}
}

export default function cn(properties?: HeadingVariantsProperties, ...classLists: Parameters<typeof merge>): string {
	const { heading = 'h1', huge } = properties ?? {};
	const dimension = getDimension({ heading, ...properties });

	return merge(
		fontVariants({
			align: properties?.align,
			dimension: huge ? 'huge' : (properties?.dimension ?? dimension),
			family: properties?.family ?? (properties?.subtitle === true ? 'secondary' : 'primary'),
			noSelect: properties?.noSelect,
			tracking: properties?.subtitle === true ? 'lg' : 'sm',
			variant: properties?.subtitle === true ? 'muted' : undefined,
			weight: properties?.weight,
		}),
		variants({ heading, ...properties }),
		...classLists
	);
}

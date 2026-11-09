import { merge } from '@mariomh8/cva';
import fontVariants from '@mariomh8/font/variants';

import type { LogoVariantsProperties } from './variants';
import variants, { pathVariants, svgVariants, textVariants } from './variants';

function logoCn(properties: LogoVariantsProperties = {}): string {
	return merge(
		fontVariants({
			dimension: 'unset',
			family: 'primary',
			noSelect: true,
			tracking: 'base',
			weight: 'base',
		}),
		textVariants({ dimension: properties.dimension, logotipo: properties.logotipo, variant: properties.variant })
	);
}

function isotipoCn(properties: LogoVariantsProperties = {}): string {
	return merge(svgVariants({ dimension: properties.dimension, variant: properties.variant }));
}

function isotipoPathCn(properties: LogoVariantsProperties = {}): string {
	return merge(pathVariants({ isotipo: properties.isotipo }));
}

export { isotipoCn, isotipoPathCn, logoCn };

export default function cn(
	{ variant, ...properties }: LogoVariantsProperties = {},
	...classLists: Parameters<typeof merge>
): string {
	return merge(fontVariants(properties), variants({ ...properties, variant }), ...classLists);
}

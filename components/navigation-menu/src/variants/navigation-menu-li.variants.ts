import type { VariantProperties } from '@mariomh/cva';
import cva from '@mariomh/cva';

const variants = cva({
	base: 'contents',
	compoundVariants: [],
	defaultVariants: {},
	variants: {},
});

type NavigationMenuLIVariantsProperties = VariantProperties<typeof variants>;

export type { NavigationMenuLIVariantsProperties };

export default variants;

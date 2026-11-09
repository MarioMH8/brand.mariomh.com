import type { VariantProperties } from '@mariomh8/cva';
import cva from '@mariomh8/cva';

const variants = cva({
	base: 'w-full mb-4 flex lg:hidden justify-between items-center',
	compoundVariants: [],
	defaultVariants: {},
	variants: {},
});

type NavigationMenuLinkWrapperVariantsProperties = VariantProperties<typeof variants>;

export type { NavigationMenuLinkWrapperVariantsProperties };

export default variants;

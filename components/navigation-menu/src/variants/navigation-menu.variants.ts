import type { VariantProperties } from '@mariomh/cva';
import cva from '@mariomh/cva';

const variants = cva({
	base: 'w-full min-h-[4rem] flex flex-row flex-nowrap justify-between items-center',
	compoundVariants: [],
	defaultVariants: {},
	variants: {},
});

type NavigationMenuVariantsProperties = VariantProperties<typeof variants>;

export type { NavigationMenuVariantsProperties };

export default variants;

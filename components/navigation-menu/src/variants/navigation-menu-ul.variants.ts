import type { VariantProperties } from '@mariomh8/cva';
import cva from '@mariomh8/cva';

const variants = cva({
	base: [
		'hidden flex-col flex-nowrap items-center',
		'lg:flex lg:flex-row lg:justify-end lg:relative lg:gap-4',
		'peer-checked:transition-all',
		'peer-checked:z-50 peer-checked:flex max-lg:peer-checked:fixed peer-checked:top-0 peer-checked:right-0 peer-checked:h-full peer-checked:w-full peer-checked:bg-primary-background dark:peer-checked:bg-primary-12 peer-checked:gap-2',
	],
	compoundVariants: [],
	defaultVariants: {},
	variants: {},
});

type NavigationMenuULVariantsProperties = VariantProperties<typeof variants>;

export type { NavigationMenuULVariantsProperties };

export default variants;

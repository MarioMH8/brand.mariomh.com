import type { VariantProperties } from '@mariomh8/cva';
import cva from '@mariomh8/cva';

const variants = cva({
	base: 'contents',
});

type NavigationMenuLIVariantsProperties = VariantProperties<typeof variants>;

export type { NavigationMenuLIVariantsProperties };

export default variants;

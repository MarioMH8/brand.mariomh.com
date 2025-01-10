import type { VariantProperties } from '@mariomh/cva';
import cva from '@mariomh/cva';

const variants = cva({
	base: 'container',
	compoundVariants: [],
	defaultVariants: {},
	variants: {},
});

export type ContainerVariantsProperties = VariantProperties<typeof variants>;

export default variants;

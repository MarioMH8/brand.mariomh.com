import type { VariantProperties } from '@mariomh8/cva';
import cva from '@mariomh8/cva';

const variants = cva({
	base: 'container',
});

export type ContainerVariantsProperties = VariantProperties<typeof variants>;

export default variants;

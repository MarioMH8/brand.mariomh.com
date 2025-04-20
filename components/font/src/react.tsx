import { Slot } from 'radix-ui';
import type { FC, ReactNode } from 'react';

import cn from './class-name';
import type { FontVariantsProperties } from './variants';

interface ReactFontProperties extends FontVariantsProperties {
	children: ReactNode;
	className?: string;
}

const Font: FC<ReactFontProperties> = ({ children, className, ...variants }) => {
	return <Slot.Slot className={cn(variants, className)}>{children}</Slot.Slot>;
};

Font.displayName = 'Font';

export type { ReactFontProperties };

export default Font;

import { Slot } from '@radix-ui/react-slot';
import type { FC, ReactNode } from 'react';

import cn from './class-name';
import type { FontVariantsProperties } from './variants';

interface ReactFontProperties extends FontVariantsProperties {
	children: ReactNode;
	className?: string;
}

const Font: FC<ReactFontProperties> = ({ children, className, ...variants }) => {
	return <Slot className={cn(variants, className)}>{children}</Slot>;
};

Font.displayName = 'Font';

export type { ReactFontProperties };

export default Font;

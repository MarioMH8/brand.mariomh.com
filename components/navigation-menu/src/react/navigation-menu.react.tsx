import Button from '@mariomh/button/react';
import { Slot } from '@radix-ui/react-slot';
import { MenuIcon, XIcon } from 'lucide-react';
import type { ComponentPropsWithRef, FC } from 'react';
import { Children, useId } from 'react';

import { classNameNavigationMenuLinkWrapper } from '../class-name';
import { NAVIGATION_MENU_ELEMENT } from '../element';
import { propertiesNavigationMenu } from '../properties';
import type { NavigationMenuVariantsProperties } from '../variants';
import NavigationMenuLI from './navigation-menu-li.react';
import NavigationMenuLogo from './navigation-menu-logo.react';
import NavigationMenuUL from './navigation-menu-ul.react';

interface ReactNavigationMenuProperties
	extends ComponentPropsWithRef<typeof NAVIGATION_MENU_ELEMENT>,
		NavigationMenuVariantsProperties {
	asChild?: boolean;
}

const NavigationMenu: FC<ReactNavigationMenuProperties> = ({ asChild, children, ref, ...p }) => {
	const Comp = asChild ? Slot : NAVIGATION_MENU_ELEMENT;
	const id = useId();
	const links = Children.toArray(children).map((link, index) => (
		<NavigationMenuLI key={`${id}-${index.toFixed(0)}`}>{link}</NavigationMenuLI>
	));

	return (
		<Comp
			{...propertiesNavigationMenu(p)}
			ref={ref}>
			<NavigationMenuLogo />
			<Button
				asChild
				className='flex lg:hidden border-none'
				icon>
				<label htmlFor={`${id}-mobile-menu`}>
					<span className='sr-only'>Abrir menu</span>
					<MenuIcon
						height='26'
						width='26'
					/>
				</label>
			</Button>
			<input
				className='peer hidden'
				id={`${id}-mobile-menu`}
				type='checkbox'
			/>
			<NavigationMenuUL>
				<li className={classNameNavigationMenuLinkWrapper()}>
					<NavigationMenuLogo />
					<Button
						asChild
						className='border-none'
						icon>
						<label htmlFor={`${id}-mobile-menu`}>
							<span className='sr-only'>Cerrar menu</span>
							<XIcon
								height='26'
								width='26'
							/>
						</label>
					</Button>
				</li>
				{links}
			</NavigationMenuUL>
		</Comp>
	);
};

NavigationMenu.displayName = 'NavigationMenu';

export type { ReactNavigationMenuProperties };

export default NavigationMenu;

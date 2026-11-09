import Logo from '@mariomh8/logo/react';
import type { FC } from 'react';

const NavigationMenuLogo: FC = () => (
	<>
		<Logo
			className='hidden sm:flex'
			dimension='xs'
			isotipo='primary'
		/>
		<Logo
			className='flex sm:hidden'
			dimension='xs'
			isotipo='primary'
			variant='isotipo'
		/>
	</>
);

NavigationMenuLogo.displayName = 'NavigationMenuLogo';

export default NavigationMenuLogo;

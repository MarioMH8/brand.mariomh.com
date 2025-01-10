import { Story as StorybookStory } from '@storybook/blocks';
import type { JSX } from 'react';

export default function Story(): JSX.Element {
	return (
		<div className='sb-unstyled flex justify-center mb-12'>
			<StorybookStory />
		</div>
	);
}

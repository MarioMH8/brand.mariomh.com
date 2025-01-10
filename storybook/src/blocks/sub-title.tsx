import Heading from '@mariomh/heading/react';
import { DocsContext } from '@storybook/blocks';
import type { JSX } from 'react';
import { useContext } from 'react';

export default function SubTitle(): JSX.Element | undefined {
	const documentContext = useContext(DocsContext);
	const story = documentContext.storyById();
	const subtitle = story.parameters['componentSubtitle'] as string | undefined;

	return subtitle ? (
		<Heading
			className='sb-unstyled text-lg'
			heading='h2'
			subtitle>
			{subtitle}
		</Heading>
	) : undefined;
}

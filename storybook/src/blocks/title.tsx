import Badge from '@mariomh/badge/react';
import Heading from '@mariomh/heading/react';
import { DocsContext, extractTitle } from '@storybook/addon-docs/blocks';
import type { JSX } from 'react';
import { Fragment, useContext } from 'react';

import AstroIcon from '../icons/astro.icon';
import ReactIcon from '../icons/react.icon';

export default function Title(): JSX.Element {
	const documentContext = useContext(DocsContext);
	const story = documentContext.storyById();
	const title = extractTitle(story.title);
	const category = story.parameters['category'] as string | undefined;
	const tags = story.parameters['exports'] as string[] | undefined;

	return (
		<div className='sb-unstyled flex flex-row items-center gap-4 mb-4'>
			<Heading className='sb-unstyled mb-0 inline-block'>{title}</Heading>
			{category && <Badge dimension='xs'>{category}</Badge>}
			{tags && (
				<div className='ml-auto flex flex-row items-center gap-4'>
					{tags.map((t, index) => {
						switch (t) {
							case 'astro': {
								return (
									<AstroIcon
										className='w-7 h-7'
										key={index}
									/>
								);
							}
							case 'react': {
								return (
									<ReactIcon
										className='w-7 h-7'
										key={index}
									/>
								);
							}
							default: {
								return <Fragment />;
							}
						}
					})}
				</div>
			)}
		</div>
	);
}

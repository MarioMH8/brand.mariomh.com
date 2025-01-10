import useIsDarkMode from '@mariomh/storybook/hooks';
import type { DocsContextProps } from '@storybook/blocks';
import { DocsContext, Source, SourceContext, useSourceProps } from '@storybook/blocks';
import type { JSX } from 'react';
import { useContext } from 'react';

type Parameters = Record<string, unknown>;

const transform = (code: string, context: ReturnType<DocsContextProps['getStoryContext']>): string => {
	const transformCode = code
		.replace(
			`
>`,
			'>'
		)
		.replace(
			`
  onClick={() => {}}`,
			''
		);
	const parameters = context['parameters'] as Parameters;
	const packageName = parameters['package'] as string | undefined;
	const originalImport = parameters['import'] as string | undefined;
	const exports = parameters['exports'] as string[] | undefined;
	const Comp = extractTag(code);
	const astro = exports?.includes('astro');
	const imp =
		originalImport ??
		(packageName && Comp
			? astro
				? `import ${Comp} from '${packageName}/react';
// import ${Comp} from '${packageName}/astro`
				: `import ${Comp} from '${packageName}/react';`
			: undefined);

	if (imp) {
		return `${imp}\n\n${transformCode}`;
	}

	return transformCode;
};

function extractTag(code: string): string | undefined {
	const pattern = /<[^\s>]+[\s>]+/;
	const match = pattern.exec(code);

	const component = match ? (match[1] ?? match[0]) : undefined;
	if (component) {
		return component.replace(/</, '').replace(/>/, '').replace(/\s/, '').trim();
	}

	return component;
}

export default function SourceCode(): JSX.Element {
	const documentContext = useContext(DocsContext);
	const sourceContext = useContext(SourceContext);
	const isDark = useIsDarkMode();
	const sourceProps = useSourceProps(
		{
			transform,
		},
		documentContext,
		sourceContext
	);

	return sourceProps.language ? (
		<Source
			{...sourceProps}
			dark={isDark}
		/>
	) : (
		<></>
	);
}

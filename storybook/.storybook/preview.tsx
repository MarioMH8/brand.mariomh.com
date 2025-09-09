import '@mariomh/archia/100.css';
import '@mariomh/archia/300.css';
import '@mariomh/archia/400.css';
import '@mariomh/archia/500.css';
import '@mariomh/archia/600.css';
import '@mariomh/archia/700.css';
import '@fontsource/dm-sans/100.css';
import '@fontsource/dm-sans/200.css';
import '@fontsource/dm-sans/300.css';
import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';
import '@fontsource/dm-sans/600.css';
import '@fontsource/dm-sans/700.css';
import '@fontsource/dm-sans/800.css';
import '@fontsource/dm-sans/900.css';
import './preview.css';

import { DocumentPage } from '@mariomh/storybook/pages';
import type { Preview } from '@storybook/react-vite';

import { dark, light } from './theme';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		backgrounds: { disable: true },
		controls: {
			matchers: {
				color: /(?:background|fill)$/i,
				date: /Date$/,
			},
		},
		darkMode: {
			// Override the default dark theme
			dark,
			// Override the default light theme
			light,
			stylePreview: true,
		},
		docs: {
			controls: { exclude: ['onClick'] },
			page: () => <DocumentPage />,
		},
		layout: 'centered',
		options: {
			storySort: {
				locales: 'es-ES',
				method: 'alphabetical',
				order: [
					'Introducción',
					'Marca',
					['Introducción', 'Paleta de colores', 'Icono y logotipo', 'Tipografía'],
					'Átomos',
					['Tipografía', ['Ejemplo', '*'], 'Formulario', '*'],
					'Moléculas',
					'Organismos',
					'Objetos',
					'Plantillas',
					'Páginas',
				],
			},
		},
	},
};

export default preview;

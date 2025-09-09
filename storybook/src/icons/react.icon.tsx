import type { JSX, SVGProps } from 'react';

export default function ReactIcon({ className = '', ...properties }: SVGProps<SVGSVGElement>): JSX.Element {
	return (
		<svg
			className={`${className} fill-primary-foreground dark:fill-primary-dark-foreground stroke-primary-foreground dark:stroke-primary-dark-foreground`}
			viewBox='-11.5 -10.23174 23 20.46348'
			{...properties}>
			<title>Componente de React</title>
			<circle
				cx='0'
				cy='0'
				r='2.05'
			/>
			<g
				fill='none'
				strokeWidth='1'>
				<ellipse
					rx='11'
					ry='4.2'
				/>
				<ellipse
					rx='11'
					ry='4.2'
					transform='rotate(60)'
				/>
				<ellipse
					rx='11'
					ry='4.2'
					transform='rotate(120)'
				/>
			</g>
		</svg>
	);
}

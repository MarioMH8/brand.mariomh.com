import { useEffect, useMemo, useState } from 'react';

function onClassChange(node: HTMLElement, callback: (o: string) => void) {
	let lastClassString = node.classList.toString();

	const mutationObserver = new MutationObserver(mutationList => {
		for (const item of mutationList) {
			if (item.attributeName === 'class') {
				const classString = node.classList.toString();
				if (classString !== lastClassString) {
					callback(classString);
					lastClassString = classString;
					break;
				}
			}
		}
	});

	mutationObserver.observe(node, { attributes: true });

	return mutationObserver;
}
const body = document.querySelector('body');
const mediaWatcher = globalThis.matchMedia('(prefers-color-scheme: dark)');

export default function useIsDarkMode(): boolean {
	const [isSystemDark, setIsSystemDark] = useState(mediaWatcher.matches);
	const [isBodyDark, setIsBodyDark] = useState<boolean | undefined>(body?.classList.contains('dark'));
	const [isBodyLight, setIsBodyLight] = useState<boolean | undefined>(body?.classList.contains('light'));
	const isDark = useMemo(() => {
		if (isBodyDark) {
			return true;
		}
		if (isBodyLight) {
			return false;
		}

		return false;

		// Return isSystemDark;
	}, [isSystemDark, isBodyDark, isBodyLight]);

	useEffect(() => {
		// Watch for updates
		function updateIsDark(event: MediaQueryListEvent) {
			setIsSystemDark(event.matches);
		}
		mediaWatcher.addEventListener('change', updateIsDark);
		if (body) {
			onClassChange(body, o => {
				setIsBodyDark(o.includes('dark'));
				setIsBodyLight(o.includes('light'));
			});
		}

		// Clean up after ourselves
		return function cleanup() {
			mediaWatcher.removeEventListener('change', updateIsDark);
		};
	});

	return isDark;
}

import Component from '@mariomh/checkbox/react';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'bun:test';

function assetComponent(element: Element | null): void {
	expect(element).toBeDefined();
	if (!element) {
		return;
	}
	expect(element.tagName).toMatchSnapshot();
	expect(element.children).toMatchSnapshot();
	expect(element.textContent).toMatchSnapshot();
	expect([...element.classList]).toMatchSnapshot();
}

describe('@mariomh/checkbox/react', () => {
	it('should default render', () => {
		const { container } = render(<Component>Test Message</Component>);
		const child = container.firstElementChild;
		assetComponent(child);
	});
	it('should override class', () => {
		const { container } = render(<Component className='text-2xl'>Test Message</Component>);
		const child = container.firstElementChild;
		assetComponent(child);
		expect(child?.classList.contains('text-2xl')).toBeTruthy();
	});
	it('should exclude variants props', () => {
		const { container } = render(
			<Component
				className='text-2xl'
				dimension='xs'
				intent='primary'>
				Test Message
			</Component>
		);
		const child = container.firstElementChild;
		assetComponent(child);
		expect(child?.attributes.length).toBe(6);
		expect(child?.attributes.item(5)?.name).toBe('class');
		expect(child?.classList.contains('text-2xl')).toBeTruthy();
	});
	it('should as child with other props', () => {
		const { container } = render(
			<Component
				asChild
				className='text-2xl'
				dimension='xs'
				intent='primary'>
				<section>Test Message</section>
			</Component>
		);
		const child = container.firstElementChild;
		assetComponent(child);
	});
});

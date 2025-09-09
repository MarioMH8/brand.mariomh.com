import { merge } from '@mariomh/cva';
import Focus from '@mariomh/focus/react';
import type { FocusVariantsProperties } from '@mariomh/focus/variants';
import Round from '@mariomh/round/react';
import Shadow from '@mariomh/shadow/react';
import Span from '@mariomh/span/react';
import type { Pallete } from '@mariomh/tailwind/pallete';
import type { HSL, LCH, RGB } from 'color-convert';
import convert from 'color-convert';
import { ClipboardIcon } from 'lucide-react';
import { HoverCard } from 'radix-ui';
import type { ReactNode } from 'react';

function lchToSting(color: LCH): string {
	return `oklch(${color[0].toString()}% ${color[1].toString()} ${color[2].toString()})`;
}
function rgbToSting(color: RGB): string {
	return `rgb(${color[0].toString()} ${color[1].toString()} ${color[2].toString()})`;
}
function hslToString(color: HSL): string {
	return `hsl(${color[0].toString()} ${color[1].toString()}% ${color[2].toString()}%)`;
}

interface ColorItemProps {
	color: LCH;
	intent: FocusVariantsProperties['intent'];
	invert?: true;
}

function ColorItem({ color, intent, invert }: ColorItemProps): ReactNode {
	return (
		<HoverCard.Root>
			<Focus intent={intent}>
				<Shadow>
					<Round>
						<HoverCard.Trigger asChild>
							<button
								className={merge(
									'min-w-16 w-16 h-32',
									'flex flex-col items-center justify-center',
									'transition-transform',
									'hover:scale-110 hover:[&_svg]:opacity-30',
									'focus-within:scale-110 focus-within:[&_svg]:opacity-30',
									invert && 'text-primary-foreground-invert'
								)}
								onClick={() => void navigator.clipboard.writeText(`#${convert.lch.hex(color)}`)}
								style={{ backgroundColor: lchToSting(color) }}
								title='Copiar color'>
								<ClipboardIcon className='transition-colors opacity-0' />
							</button>
						</HoverCard.Trigger>
					</Round>
				</Shadow>
			</Focus>
			<HoverCard.Portal>
				<Span
					asChild
					dimension='sm'>
					<HoverCard.Content
						className='data-[side=bottom]:animate-slide-up-and-fade data-[side=right]:animate-slide-left-and-fade data-[side=left]:animate-slide-right-and-fade data-[side=top]:animate-slide-down-and-fade rounded-md dark:bg-primary-dark-1 bg-primary-1 p-5 shadow-md data-[state=open]:transition-all'
						hideWhenDetached={true}
						sideOffset={5}>
						<div className='grid gap-2 grid-cols-[repeat(2,_minmax(2rem,_min-content))]'>
							<Span
								dimension='unset'
								weight='bold'>
								LCH:{' '}
							</Span>
							<code className='whitespace-nowrap'>{lchToSting(color)}</code>
							<Span
								dimension='unset'
								weight='bold'>
								HSL:{' '}
							</Span>
							<code className='whitespace-nowrap'>{hslToString(convert.lch.hsl(color))}</code>
							<Span
								dimension='unset'
								weight='bold'>
								RGB:{' '}
							</Span>
							<code className='whitespace-nowrap'>{rgbToSting(convert.lch.rgb(color))}</code>
							<Span
								dimension='unset'
								weight='bold'>
								HEX:{' '}
							</Span>
							<code className='whitespace-nowrap'>#{convert.lch.hex(color)}</code>
						</div>
						<HoverCard.Arrow className='fill-primary-1 dark:fill-primary-dark-1' />
					</HoverCard.Content>
				</Span>
			</HoverCard.Portal>
		</HoverCard.Root>
	);
}

interface ColorPalleteProps {
	intent: FocusVariantsProperties['intent'];
	pallete: Pallete;
}

export default function ColorPallete({ intent, pallete }: ColorPalleteProps): ReactNode {
	return (
		<>
			<Span
				className='block mb-6'
				dimension='sm'
				variant='muted'>
				Versión clara
			</Span>
			<section className='col-span-4 flex flex-row flex-wrap justify-center gap-3 h-fit mb-8'>
				<ColorItem
					color={pallete['1']}
					intent={intent}
				/>
				<ColorItem
					color={pallete['2']}
					intent={intent}
				/>
				<ColorItem
					color={pallete['3']}
					intent={intent}
				/>
				<ColorItem
					color={pallete['4']}
					intent={intent}
				/>
				<ColorItem
					color={pallete['5']}
					intent={intent}
				/>
				<ColorItem
					color={pallete['6']}
					intent={intent}
				/>
				<ColorItem
					color={pallete['7']}
					intent={intent}
				/>
				<ColorItem
					color={pallete['8']}
					intent={intent}
				/>
				<ColorItem
					color={pallete['9']}
					intent={intent}
				/>
				<ColorItem
					color={pallete['10']}
					intent={intent}
				/>
				<ColorItem
					color={pallete['11']}
					intent={intent}
					invert
				/>
				<ColorItem
					color={pallete['12']}
					intent={intent}
					invert
				/>
			</section>

			<Span
				className='block mb-6'
				dimension='sm'
				variant='muted'>
				Versión oscura
			</Span>
			<section className='col-span-4 flex flex-row flex-wrap justify-center gap-3 h-fit mb-12'>
				<ColorItem
					color={pallete.dark['1']}
					intent={intent}
					invert
				/>
				<ColorItem
					color={pallete.dark['2']}
					intent={intent}
					invert
				/>
				<ColorItem
					color={pallete.dark['3']}
					intent={intent}
					invert
				/>
				<ColorItem
					color={pallete.dark['4']}
					intent={intent}
					invert
				/>
				<ColorItem
					color={pallete.dark['5']}
					intent={intent}
					invert
				/>
				<ColorItem
					color={pallete.dark['6']}
					intent={intent}
					invert
				/>
				<ColorItem
					color={pallete.dark['7']}
					intent={intent}
					invert
				/>
				<ColorItem
					color={pallete.dark['8']}
					intent={intent}
					invert
				/>
				<ColorItem
					color={pallete.dark['9']}
					intent={intent}
				/>
				<ColorItem
					color={pallete.dark['10']}
					intent={intent}
				/>
				<ColorItem
					color={pallete.dark['11']}
					intent={intent}
				/>
				<ColorItem
					color={pallete.dark['12']}
					intent={intent}
				/>
			</section>
		</>
	);
}

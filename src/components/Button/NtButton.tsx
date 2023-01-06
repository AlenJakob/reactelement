import './NtButton.scss';
import classnames from 'classnames';
import { MouseEventHandler } from 'react';

type Props = {
	border?: boolean | undefined;
	round?: boolean | undefined;
	loader?: boolean | undefined;
	fullWidth?: boolean | undefined;
	text?: string;
	handleClick: MouseEventHandler<HTMLButtonElement> | undefined;
};

export const NtButton = ({ border, round, loader, fullWidth, text, handleClick }: Props) => {
	return (
		<>
			<button
				onClick={handleClick}
				className={classnames('nt-button', {
					'nt-button__border': border,
					'nt-button__round': round,
					'nt-button__fullWidth': fullWidth,
				})}
			>
				{text}
			</button>
		</>
	);
};

NtButton.defaultProps = {
	border: false,
	round: false,
	loader: false,
	fullWidth: false,
	text: false,
	handleClick: () => {},
};

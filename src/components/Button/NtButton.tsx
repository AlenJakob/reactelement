import './NtButton.scss';
import classnames from 'classnames';
import { MouseEventHandler } from 'react';
import { NtIcon } from '../icon/NtIcon';

type IconConfigProp = {
	iconName: string;
	onlyIcon?: boolean;
	additionalClassIcon: string;
};

type PropsNtButton = {
	border?: boolean | undefined;
	round?: boolean | undefined;
	loader?: boolean | undefined;
	fullWidth?: boolean | undefined;
	text?: string;
	onlyIcon?: boolean;
	iconName: string | undefined;
	additionalClassIcon: string | undefined;
	handleClick: MouseEventHandler<HTMLButtonElement> | undefined;
	iconConfig: IconConfigProp;
};

export const NtButton = ({ border, round, fullWidth, text, onlyIcon, handleClick, iconConfig }: PropsNtButton) => {
	
	return (
		<button
			onClick={handleClick}
			className={classnames('nt-button', {
				'nt-button__border': border,
				'nt-button__round': round,
				'nt-button__fullWidth': fullWidth,
				'nt-button__icon-only': onlyIcon,
			})}
		>
			{onlyIcon && <NtIcon iconConfig={iconConfig} />}
			{!onlyIcon && text && (
				<div className="nt-button__content">
					{<NtIcon iconConfig={iconConfig} />}
					{text}
				</div>
			)}
		</button>
	);
};

NtButton.defaultProps = {
	border: false,
	round: false,
	loader: false,
	fullWidth: false,
	text: false,
	iconName: '',
	onlyIcon: true,
	additionalClassIcon: '',
	handleClick: () => {},
	iconConfig: {
		iconName: '',
		onlyIcon: false,
		additionalClassIcon: '',
	},
};

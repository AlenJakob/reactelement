import './NtButton.scss';
import classnames from 'classnames';
import NtIcon from '../icon/NtIcon';
import { PropsNtButton } from '../../types/types';
import { motion } from 'framer-motion';

/**
 *
 * @param {string} buttonStyle change style of button
 * dark' | 'light'
 */

export const NtButton = ({
	border,
	round,
	fullWidth,
	text,
	handleClick,
	iconConfig,
	additionalClassButton,
	marginLeft,
	animationConfig,
	buttonMode = 'dark',
}: PropsNtButton) => {
	const { onlyIcon, iconMode = 'dark' } = iconConfig;

	const buttonIconOnly = Boolean(onlyIcon && !text);
	const buttonTextOnly = Boolean(!onlyIcon && text);
	const buttonIconAndText = Boolean(onlyIcon && text);

	const reverseIconMode = buttonMode !== iconMode ? iconMode : buttonMode;

	return (
		<motion.button
			whileHover={animationConfig ? animationConfig.whileHover : ''}
			onClick={handleClick}
			className={classnames('nt-button', additionalClassButton, `nt-button__style--${buttonMode}`, {
				'nt-button__border': border,
				'nt-button__round': round,
				'nt-button__fullWidth': fullWidth,
				'nt-button__icon-only': onlyIcon,
				'nt-button__text-with-icon': buttonIconAndText,
				'nt-button__place--margin-left': marginLeft,
			})}
		>
			{buttonIconOnly && <NtIcon iconConfig={iconConfig} iconMode={reverseIconMode} />}
			{buttonTextOnly && <div className="nt-button__content">{text}</div>}
			{buttonIconAndText && (
				<div className="nt-button__content">
					{<NtIcon iconConfig={iconConfig} iconMode={reverseIconMode} />}
					{text}
				</div>
			)}
		</motion.button>
	);
};

NtButton.defaultProps = {
	border: false,
	round: false,
	loader: false,
	fullWidth: false,
	text: '',
	iconName: '',
	additionalClassIcon: '',
	handleClick: () => {},
	iconConfig: {
		iconName: '',
		onlyIcon: false,
		additionalClassIcon: '',
	},
};

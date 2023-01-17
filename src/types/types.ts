import { MouseEventHandler } from 'react';

type PropsNtButton = {
	buttonMode?: string | undefined;
	border?: boolean | undefined;
	round?: boolean | undefined;
	loader?: boolean | undefined;
	fullWidth?: boolean | undefined;
	text?: string;
	onlyIcon?: boolean | undefined;
	iconName?: string | undefined;
	additionalClassIcon?: string | undefined;
	handleClick?: MouseEventHandler<HTMLButtonElement> | undefined;
	iconConfig: IconConfigProp;
	additionalClassButton?: string | undefined;
	marginLeft?: boolean | undefined;
	animationConfig?: any;
};

type IconConfigProp = {
	iconName?: string | undefined;
	onlyIcon?: boolean | undefined;
	additionalClassIcon?: string | undefined;
	iconMode?: string | undefined;
};

type NtIconProps = {
	iconSize?: string;
	additionalClass?: string | undefined;
	iconConfig: IconConfigProp;
	iconMode?: string | undefined;
};

type PropsNtModal = {
	buttonClose?: boolean | undefined;
	isModalVisible: boolean | number;
	style?: string | undefined;
	closeModal?: MouseEventHandler<HTMLButtonElement>;
	handleCancel?: MouseEventHandler<HTMLButtonElement>;
	handleConfirm?: MouseEventHandler<HTMLButtonElement>;
	modalConfig: {
		title: string;
		content: string;
	};
};
export type { PropsNtButton, IconConfigProp, NtIconProps, PropsNtModal };

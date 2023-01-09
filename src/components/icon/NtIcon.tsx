import './NtIcon.scss';
import React, { Suspense } from 'react';
import classNames from 'classnames';
import { sizeConverter } from '../../helpers/common';

console.log(sizeConverter(3));

type IconConfigProp = {
	iconName: string;
	onlyIcon?: boolean;
	additionalClassIcon: string;
};

type NtIconProps = {
	iconSize?: number;
	additionalClass?: string | undefined;
	iconConfig: IconConfigProp;
};

// iconSize 1 | 2 | 3

export const NtIcon = ({ iconSize = 2, iconConfig }: NtIconProps) => {
	const { iconName = 'Close', additionalClassIcon = '' } = iconConfig;

	const iconPath = 'Icon';
	const iconSizeCss = sizeConverter(iconSize);

	const DynamicNtIcon = React.lazy(() => import(`../../components/icons/${iconPath}${iconName}.tsx`));

	return (
		<div className={classNames('nt-icon', additionalClassIcon, iconSizeCss)}>
			<Suspense>
				<DynamicNtIcon />
			</Suspense>
		</div>
	);
};

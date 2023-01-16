import './NtIcon.scss';
import React, { Suspense } from 'react';
import classNames from 'classnames';
import { sizeIconConverter } from '../../helpers/common';
import { SIZE_CONVERTED } from '../../helpers/consts';
import { NtIconProps } from '../../types/types';

const NtIcon = ({ iconSize = 'medium', iconConfig, iconMode = 'none' }: NtIconProps) => {
	const { iconName, additionalClassIcon = '' } = iconConfig;

	const iconPath = 'Icon';
	const iconNameDefault = iconName ? iconName : '';
	const iconSize1 = SIZE_CONVERTED[iconSize];
	const iconSizeCss = sizeIconConverter(iconSize1);

	const DynamicNtIcon = React.lazy(() => import(`../../components/icons/${iconPath}${iconNameDefault}.tsx`));
	return (
		<div className={classNames('nt-icon', additionalClassIcon, iconSizeCss, `nt-icon__mode--${iconMode}`)}>
			{iconNameDefault && (
				<Suspense>
					<DynamicNtIcon />
				</Suspense>
			)}
		</div>
	);
};

export default NtIcon;
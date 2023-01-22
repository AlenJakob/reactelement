import classNames from 'classnames';
import { NtButton } from '../Button/NtButton';
import './NtModal.scss';
import { motion } from 'framer-motion';
import { PropsNtModal } from '../../types/types';
import { modalAnimationVariants } from '../../const/animationConfig';

// TODO: Outside click - FEATURE

export const NtModal = ({
	buttonClose,
	style,
	closeModal,
	handleCancel,
	handleConfirm,
	modalConfig,
	isModalVisible,
}: PropsNtModal) => {
	const iconConfigHeader = {
		iconName: 'Close',
		onlyIcon: true,
		additionalClassIcon: 'nt-icon__color--primary nt-icon__color--secondary',
		iconMode: 'light',
	};

	const animationCloseConfig = {
		whileHover: {
			scale: 1.1,
		},
	};

	return (
		<motion.div
			variants={modalAnimationVariants}
			initial="hidden"
			exit="exit"
			animate={isModalVisible ? 'visible' : 'exit'}
			className={classNames('nt-modal', `nt-modal__style--${style}`)}
		>
			<div className="nt-modal__content-header">
				{buttonClose && (
					<NtButton iconConfig={iconConfigHeader} animationConfig={animationCloseConfig} handleClick={closeModal} />
				)}
			</div>
			<div className="nt-modal__content">
				<h2 className="nt-modal__content-title">{modalConfig.title}</h2>
				<p className="nt-modal__content-text">{modalConfig.content}</p>
			</div>
			<div className="nt-modal__content-buttons">
				<NtButton text="ok" handleClick={handleConfirm}></NtButton>
				<NtButton text="anuluj" handleClick={handleCancel} marginLeft={true}></NtButton>
			</div>
		</motion.div>
	);
};
// PropTypes.oneOf(['News', 'Photos']),
NtModal.defaultProps = {
	content: <div></div>,
	buttonClose: true,
	isVisible: false,
	style: 'light',
};

export default NtModal;

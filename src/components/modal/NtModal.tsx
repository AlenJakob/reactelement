// @flow
import { AnimatePresence } from 'framer-motion';
import { PropsModal } from '../../types/types';
import Modal from './Modal';

const NtModal = ({ isModalVisible, closeModal, handleCancel, handleConfirm, modalConfig }: PropsModal) => {
	return (
		<AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
			{isModalVisible && (
				<Modal
					closeModal={closeModal}
					handleCancel={handleCancel}
					handleConfirm={handleConfirm}
					modalConfig={modalConfig}
					isModalVisible={isModalVisible}
				/>
			)}
		</AnimatePresence>
	);
};

export default NtModal;
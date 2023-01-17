// @flow
import { AnimatePresence } from 'framer-motion';
import { PropsNtModal } from '../../types/types';
import Modal from './NtModal';

const NtModalWrapper = ({ isModalVisible, closeModal, handleCancel, handleConfirm, modalConfig }: PropsNtModal) => {
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

export default NtModalWrapper;
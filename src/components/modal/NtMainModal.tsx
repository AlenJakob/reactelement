import { AnimatePresence } from 'framer-motion';
import { PropsNtModal } from '../../types/types';
import { NtModal } from './NtModal';
import './NtModal.scss';

export const NtMainModal = ({ isModalVisible, closeModal, handleCancel, handleConfirm, modalConfig }: PropsNtModal) => {
	return (
		<AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
			{isModalVisible && (
				<NtModal
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
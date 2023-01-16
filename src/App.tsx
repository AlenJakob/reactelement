import './index.scss';
import { useState } from 'react';
import NtModal from './components/modal/NtModal';
import { modalConfigMock } from './const/consts';
import { NtButton } from './main';

// Example of icon config
// const iconConfig = {
// 	iconName: 'Plus',
// 	onlyIcon: true,
// 	additionalClassIcon: 'nt-icon__color--primary',
// 	mode: 'dark | light',
// };

const App = () => {
	const [isModalVisible, setModaVisible] = useState(false);

	const openModal = () => setModaVisible(true);
	const closeModal = () => setModaVisible(false);

	return (
		<div className="App">
			<NtButton handleClick={openModal} text="click" />
			<NtModal
				closeModal={closeModal}
				handleCancel={closeModal}
				handleConfirm={closeModal}
				isModalVisible={isModalVisible}
				modalConfig={modalConfigMock}
			/>
		</div>
	);
};

export default App;

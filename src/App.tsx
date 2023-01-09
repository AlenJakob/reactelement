import { useState } from 'react';
import './index.scss';
import { Modal } from './components/modal/Modal';
import { NtButton } from './components/Button/NtButton';
// TODO: TESTING HERE THE PACAKGE :)

const iconConfig = {
	iconName: 'Plus',
	onlyIcon: false,
	additionalClassIcon: 'nt-icon__color--basic',
};

function App() {
	const [modal, setModal] = useState(false);

	const toggleModalTest = () => {
		setModal(!modal);
	};

	return (
		<div className="App">
			{/* <button onClick={toggleModalTest}>Toggle Modal</button> */}
			<div>
				{/* <NtButton handleClick={toggleModalTest} text="Toggle Modal" /> */}
				<NtButton handleClick={toggleModalTest} iconConfig={iconConfig} text="Toggle modal" />
			</div>
			<Modal isVisible={modal} content={<div>lorel ipsum 12</div>} />
		</div>
	);
}

export default App;

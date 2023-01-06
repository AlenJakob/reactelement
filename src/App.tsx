import { useState } from 'react';
import './index.scss';
import { Modal } from './components/modal/Modal';
import { NtButton } from './components/Button/NtButton';

function App() {
	const [modal, setModal] = useState(false);

	const toggleModalTest = () => {
		setModal(!modal);
	};

	return (
		<div className="App">
			{/* <button onClick={toggleModalTest}>Toggle Modal</button> */}
			<div>
				<NtButton handleClick={toggleModalTest} text="Toggle Modal" />
			</div>
			<Modal isVisible={modal} />
		</div>
	);
}

export default App;

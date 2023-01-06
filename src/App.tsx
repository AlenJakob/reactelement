import { useState } from 'react';
import { Modal } from './components/modal/Modal';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<Modal />
		</div>
	);
}

export default App;

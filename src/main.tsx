import Modal from './components/modal/Modal';
import { NtButton } from './components/Button/NtButton';
import { createRoot } from 'react-dom/client';
import App from './App';
import React from 'react';

// Components exported
// Main
export { Modal, NtButton };

// Local tests:

createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);

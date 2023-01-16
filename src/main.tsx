import NtModal from './components/modal/NtModal';
import { NtButton } from './components/Button/NtButton';
import { createRoot } from 'react-dom/client';
import App from './App';
import React from 'react';
import NtIcon from './components/icon/NtIcon';

// Components exported
// Main
export { NtModal, NtButton, NtIcon };

// Local tests file:

createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);

import { createRoot } from 'react-dom/client';
import App from './App';
import React from 'react';
import NtIcon from './components/icon/NtIcon';
import NtButton from './components/Button/NtButton';
import NtMainModal from './components/modal/NtMainModal';

// Components exported
// Main
module.exports = { NtMainModal, NtButton, NtIcon };

// Local tests file:

createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);

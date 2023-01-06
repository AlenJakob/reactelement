import classNames from 'classnames';
import { ReactNode } from 'react';
import './Modal.scss';

type PropsModal = {
	content?: ReactNode;
	buttonClose?: boolean;
	isVisible: boolean;
	style: string;
};

export const Modal = ({ content, buttonClose, isVisible = false, style }: PropsModal) => {
	console.log('MODAL22222');

	return (
		<>
			{isVisible && (
				<div className={classNames('nt-modal', `nt-modal__style--${style}`, {})}>
					<div className="nt-modal__header"></div>
					<h1>test</h1>
					{content}
				</div>
			)}
		</>
	);
};

Modal.defaultProps = {
	content: false,
	buttonClose: false,
	isVisible: false,
	style: 'light',
};

export default Modal;

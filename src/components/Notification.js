import React from 'react';
import { useGlobalContext } from 'context';
import './notification.css';
import TeamBoardModal from 'components/modals/TeamBoardModal';

const Notification = () => {
	const { state, text, openModal } = useGlobalContext();
	const info = text[state.lang].notification[state.notificationStatus];

	const clickHandler = () => {
		state.notificationStatus === 'success' && openModal(<TeamBoardModal />);
	};

	return (
		<div
			className={`notification-${state.notificationStatus} ${
				state.openedNotification ? 'opened' : ''
			}`}
			onClick={clickHandler}
		>
			<h5>{info.mainTxt}</h5>
			<p>{info.secTxt}</p>
		</div>
	);
};

export default Notification;

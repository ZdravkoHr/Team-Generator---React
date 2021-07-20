import InfoModal from '../components/modals/InfoModal';
import TeamBoardModal from '../components/modals/TeamBoardModal';
import SettingsModal from '../components/modals/SettingsModal';

const menuIcons = [
	{
		icon: <i className='fas fa-info'></i>,
		openModal: <InfoModal />,
	},
	{
		icon: <i className='fas fa-users'></i>,
		openModal: <TeamBoardModal />,
	},
	{
		icon: <i className='fas fa-cog'></i>,
		openModal: <SettingsModal />,
	},
];

export default menuIcons;

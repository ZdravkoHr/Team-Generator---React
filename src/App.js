import './App.css';
import { useGlobalContext } from './context/';
import uuid from 'react-uuid';

import Generator from 'components/Generator';

function App() {
	const { state, menuIcons, openModal } = useGlobalContext();

	return (
		<>
			{state.openedModal}
			<div className='icons-bar'>
				<div className='menu'>
					{menuIcons.map(icon => {
						return (
							<div
								className='icon'
								key={uuid()}
								onClick={() => openModal(icon.openModal)}
							>
								{icon.icon}
							</div>
						);
					})}
				</div>
			</div>

			<main className='main-app'>
				<Generator />
			</main>
		</>
	);
}

export default App;

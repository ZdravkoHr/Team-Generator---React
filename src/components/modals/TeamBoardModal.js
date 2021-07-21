import { useGlobalContext } from 'context';
import React from 'react';
import uuid from 'react-uuid';
import './modal.css';
import './common-modal.css';
import './teamboard.css';

import TeamArticle from './TeamArticle';

function TeamBoardModal() {
	const { text, state, closeModal, sortTeams, sortMembers } =
		useGlobalContext();
	const infoText = text[state.lang].teamBoard;

	return (
		<div className='overlay'>
			<div className='modal teamboard'>
				<header className='modal-header'>
					<h2>{infoText.title}</h2>
					<div className='close-btn' onClick={closeModal}>
						&times;
					</div>
					<div className='filters'>
						<select
							name='sort-teams'
							id='sort-teams'
							onChange={e => sortTeams(e.target.value)}
							value={state.teamsSortedBy}
						>
							<option value=''>{infoText.sort.defaultTeams}</option>
							{generateOptions(infoText)};
						</select>
						<select
							name='sort-members'
							id='sort-members'
							onChange={e => sortMembers(e.target.value)}
							value={state.membersSortedBy}
						>
							<option value=''>{infoText.sort.defaultMembers}</option>
							{generateOptions(infoText)};
						</select>
					</div>
				</header>
				<main className='modal-main'>
					<section className='modal-content'>
						{!state.teams.length && (
							<p className='no-teams'>{infoText.noTeams}</p>
						)}

						{state.teams.map((team, index) => (
							<TeamArticle team={team} index={index} key={uuid()} />
						))}

						<div className='excluded'>
							{state.excluded.length > 0 && <h4>{infoText.excluded}</h4>}
							<p className='members'>{state.excluded.join(', ')}</p>
						</div>
					</section>
				</main>
			</div>
		</div>
	);
}

function generateOptions(infoText) {
	return infoText.sort.options.map(option => {
		return (
			<option key={uuid()} value={option.value}>
				{option.text}
			</option>
		);
	});
}

export default TeamBoardModal;

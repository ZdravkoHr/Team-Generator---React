import React, { useState } from 'react';
import { useGlobalContext } from 'context';
import './generator.css';
import generateTeams from 'generateTeams';

function Generator() {
	const { state, text, setTeams, setExcluded, openNotification } =
		useGlobalContext();
	const info = text[state.lang];

	const [members, setMembers] = useState([]);
	const [teamsCount, setTeamsCount] = useState(0);
	const [teamsNames, setTeamsNames] = useState([]);

	const updateMembers = e => {
		const members = e.target.value.split('\n').filter(Boolean);
		setMembers(members);
	};

	const updateTeamsNames = e => {
		const names = e.target.value.split('\n').filter(Boolean);
		setTeamsNames(names);
	};

	const submitHandler = e => {
		e.preventDefault();
		try {
			const [teams, excluded] = generateTeams({
				members,
				teamsCount,
				teamsNames,
				allowOdd: state.settings.placement === 'inequal',
			});
			setTeams(teams);
			setExcluded(excluded);
			openNotification('success');
		} catch (e) {
			openNotification('fail');
		}
	};

	return (
		<form className='generator' onSubmit={submitHandler}>
			<h2>{info.title}</h2>
			<div className='form-group members'>
				<label htmlFor='members'>{info.peopleField.label1}</label>
				<textarea
					name='members'
					id='members'
					onChange={updateMembers}
				></textarea>
				<p className='people-count'>
					{info.peopleField.subLabel1} {members.length}
				</p>
			</div>
			<div className='form-group teams-count'>
				<label htmlFor='count'>{info.teamsField.label1}</label>
				<input
					type='number'
					min='0'
					max={members.length}
					id='count'
					onChange={e => setTeamsCount(+e.target.value)}
				/>
			</div>
			<div className='form-group teams-names'>
				<label htmlFor='names'>{info.teamNamesField.label1}</label>
				<textarea
					name='names'
					id='names'
					onChange={updateTeamsNames}
				></textarea>
			</div>
			<button className='btn generate-btn'>{info.btnTxt}</button>
		</form>
	);
}

export default Generator;

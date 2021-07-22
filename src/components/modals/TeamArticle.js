import React, { useState, useRef } from 'react';
import uuid from 'react-uuid';
import { useGlobalContext } from 'context';

function TeamArticle({ team, index }) {
	const [currentName, setCurrentName] = useState(team.name);
	const [editing, setEditing] = useState(false);
	const { editTeam } = useGlobalContext();

	const input = useRef();

	const startEditing = () => {
		setEditing(true);
		input.current.focus();
	};

	const confirmEdit = () => {
		if (currentName === '') {
			setCurrentName(team.name);
			setEditing(false);
			return;
		}

		editTeam(index, currentName);
	};

	const keyDownHandler = ({ keyCode }) => {
		if (keyCode === 13 && editing) confirmEdit();
	};

	return (
		<article>
			<h4 className='team-name'>
				{!editing && (
					<span className='edit-btn' onClick={startEditing}>
						<i className='fas fa-edit'></i>
					</span>
				)}

				{editing && (
					<span className='confirm-btn' onClick={confirmEdit}>
						<i className='fas fa-check'></i>
					</span>
				)}

				<input
					type='text'
					value={currentName}
					onChange={e => setCurrentName(e.target.value)}
					onKeyDown={keyDownHandler}
					readOnly={!editing}
					ref={input}
				/>
			</h4>
			<ol>
				{team.members.map(member => {
					return <li key={uuid()}>{member}</li>;
				})}
			</ol>
		</article>
	);
}

export default TeamArticle;

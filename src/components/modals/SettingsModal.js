import React, { useRef } from 'react';
import { useGlobalContext } from 'context';
import uuid from 'react-uuid';
import './settings.css';

function SettingsModal() {
	const selectDropdown = useRef();
	const { text, state, changePlacement } = useGlobalContext();
	const { title, label, options, saveBtnTxt, closeBtnTxt } =
		text[state.lang].settings;

	return (
		<div className='overlay'>
			<div className='modal settings'>
				<h2>{title}</h2>
				<div className='setting'>
					<label htmlFor='placement'>{label}</label>
				</div>

				<select
					ref={selectDropdown}
					name='placement'
					id='placement'
					value={state.settings.placement}
				>
					{options.map(option => {
						return (
							<option key={uuid()} value={option.value}>
								{option.text}
							</option>
						);
					})}
				</select>
				<p>{state.settings.placement}</p>
				<div className='buttons'>
					<button
						className='save-btn'
						onClick={() => changePlacement(selectDropdown.value)}
					>
						{saveBtnTxt}
					</button>
					<button className='close-btn'>{closeBtnTxt}</button>
				</div>
			</div>
		</div>
	);
}

export default SettingsModal;

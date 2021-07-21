import React, { useRef } from 'react';
import { useGlobalContext } from 'context';
import uuid from 'react-uuid';
import './settings.css';

function SettingsModal() {
	const selectDropdown = useRef();
	const { text, state, updateSettings, closeModal } = useGlobalContext();
	const { title, label, options, closeBtnTxt } = text[state.lang].settings;

	const changeHandler = e => {
		const newSettings = { ...state.settings, placement: e.target.value };
		updateSettings(newSettings);
	};

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
					onChange={changeHandler}
				>
					{options.map(option => {
						return (
							<option key={uuid()} value={option.value}>
								{option.text}
							</option>
						);
					})}
				</select>
				<div className='buttons'>
					<button className='close-btn' onClick={closeModal}>
						{closeBtnTxt}
					</button>
				</div>
			</div>
		</div>
	);
}

export default SettingsModal;

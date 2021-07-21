import { useGlobalContext } from 'context';
import React from 'react';
import uuid from 'react-uuid';
import './modal.css';
import './common-modal.css';

function InfoModal() {
	const { text, state, closeModal } = useGlobalContext();
	const infoText = text[state.lang].infoBox;
	return (
		<div className='overlay'>
			<div className='modal'>
				<header className='modal-header'>
					<h2>{infoText.title}</h2>
					<div className='close-btn' onClick={closeModal}>
						&times;
					</div>
				</header>
				<main className='modal-main'>
					<section className='modal-content'>
						{infoText.articles.map(article => {
							return (
								<article key={uuid()}>
									<h4>{article.title}</h4>
									{article.html}
								</article>
							);
						})}
					</section>
				</main>
			</div>
		</div>
	);
}

export default InfoModal;

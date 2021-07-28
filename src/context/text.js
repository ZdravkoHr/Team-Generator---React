const text = {
	bg: {
		title: 'Генератор на отбори',
		peopleField: {
			label1: 'Въведете имената на хората, всяко на нов ред:',
			subLabel1: 'Брой хора: ',
		},
		teamsField: {
			label1: 'Колко отбора искате да сформирате?',
		},
		teamNamesField: {
			label1:
				'Ако искате отборите да имат имена, напишете ги тук, всяко на нов ред:',
		},
		btnTxt: 'Генерирай отборите',
		notification: {
			success: {
				mainTxt: 'Отборите са сформирани',
				secTxt: 'Кликнете, за да ги видите',
			},
			fail: {
				mainTxt: 'Нещо се обърка!',
				secTxt: 'Моля, проверете въведените данни',
			},
		},

		infoBox: {
			title: 'За приложението',
			articles: [
				{
					title: 'Предназначение',
					html: (
						<p>
							Това, което приложението прави, е да разделя в отбори хора, чиито
							имена са предоставени от потребителя, на случаен принцип. Отборите
							могат да бъдат използвани за разпределение на играчи в някоя игра
							или по преценка на потребителя.
						</p>
					),
				},
				{
					title: 'Как работи приложението?',
					html: (
						<>
							<p>
								За да получите желаните отбори, трябва да въведете имената на
								хората, всяко на отделен ред,и колко отбора желаете да бъдат
								сформирани. По избор може да предоставите и имена за отборите.
								След като сте попълнили нужната информация и цъкнете бутона, ще
								получите известие в долния десен ъгъл. Ако всичко е наред, като
								натиснете върху известието, ще се отвори прозореца с отборите. В
								противен случай ще бъдете известен/а, че има проблем. Тогава
								трябва да проверите предоставената от Вас информация.
							</p>
							<p>Възможни причини за случване на грешка са:</p>
							<ul className='list'>
								<li>
									оставили сте някое от полетата празни, т.е без информация;
								</li>
								<li>
									искате да сформирате повече отбори, отколкото са хората,
									например – 2 човека и 3 отбора;
								</li>
								<li>
									написали сте нещо, различно от цяло число, в полето, в което
									трябва да кажете колко отбора желаете.
								</li>
							</ul>
							<p></p>
						</>
					),
				},
				{
					title: 'Меню',
					html: (
						<>
							<p>В менюто ще откриете няколко опции:</p>
							<ol className='list'>
								<li>
									информация за приложението – отваря информацията за
									приложението – информацията, която четете в момента;
								</li>
								<li>иконка, която отваря прозореца с отборите при кликане;</li>
								<li>
									насторойки, в които можете да управлявате начина на разделяне
									на хора по отбори и как ще бъдат показани в прозореца с
									отборите.
								</li>
							</ol>
							<p></p>
						</>
					),
				},
				{
					title: 'Техническа информация',
					html: (
						<>
							<p>
								За създаването на приложението са използвани HTML, CSS и
								JavaScript (React.js)
							</p>
						</>
					),
				},
			],
		},

		teamBoard: {
			title: 'Отбори',
			sort: {
				memberLabel: 'Подреди членовете по:',
				options: [
					{ text: 'азбучен ред (възходящо)', value: 'alphabetic+' },
					{ text: 'азбучен ред (низходящо)', value: 'alphabetic-' },
					{ text: 'дължина на името (възходящо)', value: 'length+' },
					{ text: 'дължина на името (низходящо)', value: 'length-' },
				],
				defaultTeams: 'Подреди отборите по: ',
				defaultMembers: 'Подреди членовете по: ',
			},

			noTeams: 'Няма сформирани отбори.',
			excluded: 'Членове, които не участват в нито един отбор: ',
		},

		settings: {
			title: 'Настройки',
			label: 'Ако отборите не могат да бъдат с равен брой членове: ',
			options: [
				{
					text: 'да бъдат с неравен брой членове',
					value: 'inequal',
				},
				{
					text: 'нужният брой души да не бъде добавян към отборите',
					value: 'excluding',
				},
			],

			closeBtnTxt: 'Затвори',
		},
	},
	eng: {
		title: 'Team Generator',
		peopleField: {
			label1: 'Write down the names of the members, each on a new line',
			subLabel1: 'People count: ',
		},
		teamsField: {
			label1: 'How many teams do you want to form?',
		},
		teamNamesField: {
			label1:
				'In case that you want the teams to have names, write them down here, each on a new line',
		},
		btnTxt: 'Generate teams',
		notification: {
			success: {
				mainTxt: 'The teams are formed',
				secTxt: 'Click here to see them',
			},
			fail: {
				mainTxt: 'Something went wrong!',
				secTxt: 'Please check again the provided data',
			},
		},

		infoBox: {
			title: 'About this app',
			articles: [
				{
					title: 'What is the purpose of this app?',
					html: (
						<p>
							The app divides people whom names are provided by the user into
							teams on a random basis.
						</p>
					),
				},
				{
					title: 'How does the app work?',
					html: (
						<>
							<p>
								In order to get the desired teams, you must fill in the names of
								the members, each on a new line, and also, how many teams do you
								want to be formed. Optionally, you can provide names for the
								teams. After you have filled in the necessary information, click
								the "Generate teams" button. A notification will pop up in the
								bottom right corner of the screen. If there are no problems, by
								clicking on the notification, you will open the Team Board.
								Otherwise, check again the provided information.
							</p>

							<p>An error may occur if you: </p>
							<ul className='list'>
								<li>
									have submitted the form without filling in all the neccessary
									fields;
								</li>
								<li>
									are trying to generate an invalid amount of teams - either
									more than the count of the members or less than 1;
								</li>
								<li>
									have filled in something different than an integer in the
									filed where you are supposed to let the app knows how many
									teams do you want to form;
								</li>
							</ul>
							<p></p>
						</>
					),
				},
				{
					title: 'Menu',
					html: (
						<>
							<p>In the menu, you will find several options: </p>
							<ol className='list'>
								<li>
									information about the app - opens the information window about
									the app - the one you are reading right now;
								</li>
								<li>an icon which opens the Team Board when clicked;</li>
								<li>settings about the preffered way to generate teams.</li>
							</ol>
							<p></p>
						</>
					),
				},
				{
					title: 'Technical info',
					html: (
						<>
							<p>This app is created with HTML, CSS and JS (React.js).</p>
						</>
					),
				},
			],
		},

		teamBoard: {
			title: 'Team Board',
			sort: {
				memberLabel: 'Sort the members by: ',
				options: [
					{ text: 'alphabetic order (ascending)', value: 'alphabetic+' },
					{ text: 'alphabetic order (descending)', value: 'alphabetic-' },
					{ text: 'length of name (ascending)', value: 'length+' },
					{ text: 'length of name (descending)', value: 'length-' },
				],
				defaultTeams: 'Sort the teams by: ',
				defaultMembers: 'Sort the members by: ',
			},

			noTeams: 'There are no formed teams yet.',
			excluded: 'Members not included in a team:  ',
		},

		settings: {
			title: 'Settings',
			label:
				'If it is impossible for the teams to have an equal count of members:  ',
			options: [
				{
					text: 'some teams will have less members than others',
					value: 'inequal',
				},
				{
					text: 'do not include some people in the team formation',
					value: 'excluding',
				},
			],

			closeBtnTxt: 'Close',
		},
	},
};

export default text;

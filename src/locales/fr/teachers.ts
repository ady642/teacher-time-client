const teachers = {
	call: "Appeler",
	profile: "Profil",
	test: 'mytest',
	teacherOffline: 'Le professeur est hors ligne',
	online: 'En ligne',
	offline: 'Hors ligne',
	form: {
		creation: {
			fields: {
				title: 'Sélectionner votre spécialité',
				subtitle: 'Vous pouvez sélectionner plusieurs matières'
			},
			description: {
				title: 'Description de votre annonce',
				subtitle: 'La description permet de vous présenter rapidement lorsqu\'ils cherchent un professeur'
			},
			level: {
				title: 'Niveaux enseignés',
				subtitle: 'Choisissez les classes auxquelles vous souhaitez enseigner'
			},
			hourlyRate: {
				title: 'Prix par heure',
				subtitle: 'Indiquez le prix par heure de vos cours. Il sera facturé au pro-rata si la classe dure moins qu\'une heure'
			}
		}
	}
};

export default teachers;

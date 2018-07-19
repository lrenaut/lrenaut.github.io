function display_date() {
	var now = new Date();
	var jours = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
	var mois = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août',
	            'Septembre', 'Octobre', 'Novembre', 'Décembre'];
	$('#dateinfos').html(jours[now.getDay() - 1] + '&nbsp;' + now.getDate() + '&nbsp;' + mois[now.getMonth()]
	                     + '&nbsp;' + now.getFullYear());
}
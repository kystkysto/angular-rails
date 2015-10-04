//public/js/app/material/MaterialListController.js

;(function() {

	angular.module('Alperina.controllers')
		.controller('MaterialListController', MaterialListController);

	function MaterialListController($rootScope, $location, Header, $http) {

		var self = this;
		$http.get('/api/material.json?rubric=persons').then(function(list) {
			console.log('list');
	    	self.materials = list.data;
		});
/*			materials = [
				{
					id: 1,
					title: 'Страна "Нельзя"',
					date: '11.03.2015',
					text: 'Какой думающий человек в России не любит замечательное стихотворение Алексея Толстого, в котором рефреном повторяются слова: "Земля наша богата,/Порядка в ней лишь нет". Но есть на свете страны, где порядки таковы, что нам даже и не снилось. Я имею в виду государство Сингапур. Что любопытно, в свое время отцы-основатели Сингапура...',
					tags: [
						{
							alias: 'Шоу-бизнес',
							name: 'show_business',
							id: 5
						}
					]
				},
				{
					id: 2,
					title: 'В фильме "Призрак" школьник управляет самолетом под руководством... привидения',
					date: '09.03.2015',
					text: 'И в качестве слогана к этой картине действительно вполне бы могли подойти слова "Он улетел, но обещал вернуться". На самом деле в фильме, и это уже видно по трейлеру, есть все те же составляющие, что и в сказке Астрид Линдгрен. Есть "Малыш" - школьник Ваня Кузнецов, которого играет Семен Трескунов - одинокое, никем не понимаемое существо...',
					tags: [
						{
							alias: 'Шоу-бизнес',
							name: 'show_business',
							id: 5
						},
						{
							alias: 'Актеры',
							name: 'actors',
							id: 1
						}
					]
				},
				{
					id: 3,
					title: 'Козловский снова споет в Большом. (Интервью с Данилой Козловским)',
					date: '09.03.2015',
					text: 'В прокат выходит фильм "ДухLess 2" - продолжение одного из самых успешных российских фильмов. Первый, снятый по одноименной книге Сергея Минаева, стал в 2012 году не просто фильмом-открытия Московского международного кинофестиваля, но и самой кассовой...',
					tags: [
						{
							alias: 'Шоу-бизнес',
							name: 'show_business',
							id: 5
						},
						{
							alias: 'Актеры',
							name: 'actors',
							id: 1
						}
					]
				}
			];*/
		
		//self.materials = materials;

		self.showTags = Header.showTags;

		self.path = $location.path();
		
	}

})();
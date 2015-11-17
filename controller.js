var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
	$routeProvider.when('/',{
		templateUrl: 'houses_starter.html',
		controller: 'mainController'
	}).
	when('/add', {
		templateUrl: 'pages/add.html',
		controller: 'addController'
	}).
	when('/edit', {
		templateUrl: 'pages/edit.html',
		controller: 'editController'
	}).
	when('/delete', {
		templateUrl: 'pages/delete.html',
		controller: 'deleteController'
	}).
	otherwise({
		redirect: '/'
	})
});

myApp.factory("House", function() {
	return function(name, img, address, city, sale, price, Zestimate, disc, mortgage) {
		return {
			name: name,
			img: img,
			address: address,
			city: city,
			sale: sale,
			price: price,
			Zestimate: Zestimate,
			disc: disc,
			mortgage: mortgage
		}
	}
});

myApp.controller('houseCtrl', function($scope) {

	$scope.houses = houses;

	var index = 0;
	setView('list');

	function setView(view) {
		$scope.view = view;
	}

	$scope.setView = function(view) {
		setView(view);
	}

	$scope.goToAdd = function() {
		setView('add');
		$scope.addTitle = '';
		$scope.addImage = '';
		$scope.addAddress = '';
		$scope.addCity = ''
		$scope.addSale = '';
		$scope.addPrice = '';
		$scope.addZest = '';
		$scope.addDisc = '';
		$scope.addMort = '';
	}

	$scope.goToEdit = function(selectedHouse) {
		setView('edit');
		$scope.houseIndex = selectedHouse;
		$scope.editTitle = houses[selectedHouse].title;
		$scope.editImage = houses[selectedHouse].image;
		$scope.editAddress = houses[selectedHouse].address;
		$scope.editCity = houses[selectedHouse].city;
		$scope.editSale = houses[selectedHouse].sale;
		$scope.editPrice = houses[selectedHouse].price;
		$scope.editZest = houses[selectedHouse].Zestimate;
		$scope.editDisc = houses[selectedHouse].disc;
		$scope.editMort = houses[selectedHouse].mortgage;

		$scope.houses = houses;
	}

	$scope.goToDelete = function(selectedHouse) {
		$scope.houseIndex = selectedHouse;
		setView('delete');
	}

	$scope.addHouse = function() {
		var newHouse = new House($scope.addTitle, $scope.addImage, $scope.addAddress, $scope.addCity, $scope.addSale, $scope.addPrice, $scope.addZest, $scope.addDisc, $scope.addMort);
		console.log("$$$$$$$$$");
		console.log(newHouse);
		houses.push(newHouse);
		$scope.houses = houses;
		console.log(houses);
		setView('list');
	}

	$scope.saveEditHouse = function(selectedHouse) {
		// set the new value of house var
		houses[selectedHouse].title = $scope.editTitle
		houses[selectedHouse].image = $scope.editImage
		houses[selectedHouse].address = $scope.editAddress
		houses[selectedHouse].city = $scope.editCity
		houses[selectedHouse].sale = $scope.editSale
		houses[selectedHouse].price = $scope.editPrice
		houses[selectedHouse].Zestimate = $scope.editZest
		houses[selectedHouse].disc = $scope.editDisc
		houses[selectedHouse].mortgage = $scope.editMort

		// reset scope houses equal to housev var
		$scope.houses = houses;
		setView('list');
	}

	$scope.enableAdd = function() {
		return index < houses.length;
	}

	$scope.deleteHouse = function(selectedHouse) {
		houses.splice(selectedHouse, 1);
		$scope.houses = houses;
		setView('list');
	}

	$scope.clearHouses = function() {
		$scope.houses[0].remove;
		index = 0;
	}
});
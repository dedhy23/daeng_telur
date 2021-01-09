angular.module('app.controllers', ['ionic'])
  
.controller('berandaCtrl', function ($scope, $stateParams, $rootScope, aksi) {

    $scope.$on("$ionicView.loaded", function () {
		aksi.getItems().then(
			function successCallback(response) {
                
                $rootScope.items = response.data.data;
                console.log($rootScope);
			},
			function errorCallback(response) {
				//$rootScope.logo = 'assets/img/no_image.png';
				// console.log(response.data);
				// action.showAlert('Maaf', response.data.error);
			}
		);

    });
    // $scope.details = function(){
	// 	aksi.details().then(function successCallback(response){
	// 	console.log(response.data.data);
	// 		$rootScope.data_telur = response.data.data;
	//     }, function errorCallback(response){
	//     	$rootScope.data_telur={};
	// 	})
	// }
	// $scope.details();

})
   
.controller('keranjangCtrl', function ($scope, $stateParams) {


})
   
.controller('transaksiCtrl', function ($scope, $stateParams) {


})
   
.controller('beranda2Ctrl', function ($scope, $stateParams) {


})
   
.controller('masukCtrl', function ($scope, $stateParams) {


})
   
.controller('daftarCtrl', function ($scope, $stateParams) {


})
   
.controller('rincianBarangCtrl', function ($scope, $stateParams) {


})
   
.controller('rincianBarangNamaBarangCtrl', function ($scope, $stateParams) {


})
   
.controller('profilCtrl', function ($scope, $stateParams) {


})
   
.controller('formTransaksiCtrl', function ($scope, $stateParams) {


})
   
.controller('formPengataranCtrl', function ($scope, $stateParams) {


})
   
.controller('mapsExampleCtrl', function($scope, uiGmapGoogleMapApi) {
    // Do stuff with your $scope.
    // Note: Some of the directives require at least something to be defined originally!
    // e.g. $scope.markers = []

    // uiGmapGoogleMapApi is a promise.
    // The "then" callback function provides the google.maps object.
    uiGmapGoogleMapApi.then(function(maps){
        // Configuration needed to display the road-map with traffic
        // Displaying Ile-de-france (Paris neighbourhood)
        $scope.map = {
            center: {
              latitude: -23.598763,
              longitude: -46.676547
            },
            zoom: 13,
            options: {
                mapTypeId: google.maps.MapTypeId.ROADMAP, // This is an example of a variable that cannot be placed outside of uiGmapGooogleMapApi without forcing of calling the google.map helper outside of the function
                streetViewControl: false,
                mapTypeControl: false,
                scaleControl: false,
                rotateControl: false,
                zoomControl: false
            }, 
            showTraficLayer:true
        };
    });
})
   
.controller('editProfilCtrl', function ($scope, $stateParams) {


})
   
.controller('rincianTransaksiCtrl', function ($scope, $stateParams) {


})
   
.controller('formPembayaranCtrl', function ($scope, $stateParams) {


})
   
.controller('dataMahasiswaCtrl', function ($scope, $stateParams, service, view) {

    

})

.run(function ($rootScope, $state, aksi) {
	$rootScope.items = [];

});
 
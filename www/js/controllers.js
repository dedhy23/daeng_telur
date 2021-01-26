angular.module('app.controllers', ['ionic'])
  
.controller('berandaCtrl', function ($scope, $stateParams, $state, $rootScope, aksi) {

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
        aksi.getKategori().then(
            function successCallback(response){
                $rootScope.kategori=response.data.data;
            },
            function errorCallback(response) {
                $rootScope.kategori={};
            }
        )
    });
    $scope.details = function(id_telur){
        console.log(id_telur);
        aksi.getDetails(id_telur).then(
            function successCallback(response){
                $rootScope.details_telur = response.data.data;
                // console.log($rootScope);
                $state.go('beranda2.rincianBarang');
            },
            function errorCallback(response){
                $rootScope.details_telur={};
            }
        )
    };
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

.filter('listToMatrix', function() {
    function listToMatrix(list, elementsPerSubArray) {
        var matrix = [], i, k;

        for (i = 0, k = -1; i < list.length; i++) {
            if (i % elementsPerSubArray === 0) {
                k++;
                matrix[k] = [];
            }

            matrix[k].push(list[i]);
        }

        return matrix;
    }
    return function(list, elementsPerSubArray) {
        return listToMatrix(list, elementsPerSubArray);
    };
})

.run(function ($rootScope, $state, aksi) {
	$rootScope.items = [];

});
 

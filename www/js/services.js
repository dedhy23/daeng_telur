angular.module('app.services', [])

.factory('action', [function($q, $http, $ionicPopup){
    var server = "http://127.0.0.1/daeng-telur/service";
    var view = {};
    
	view.details = function(id){
		return $http({
            method: 'GET',
            url: server+'aksi.php?aksi=details&id='+id
        });
    }
    
    view.showAlert = function(title, isi_pesan) {
		var alertPopup = $ionicPopup.alert({
		 title: title,
		 template: isi_pesan
		});

		alertPopup.then(function(res) {
		 // Custom functionality....
		});
  	}; 
    return view;

}])

.service('BlankService', [function(){

}]);
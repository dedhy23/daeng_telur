angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('beranda2.beranda', {
    url: '/page-beranda',
    views: {
      'side-menu21': {
        templateUrl: 'templates/beranda.html',
        controller: 'berandaCtrl'
      }
    }
  })

  .state('beranda2.keranjang', {
    url: '/page-keranjang',
    views: {
      'side-menu21': {
        templateUrl: 'templates/keranjang.html',
        controller: 'keranjangCtrl'
      }
    }
  })

  .state('beranda2.transaksi', {
    url: '/page-transaksi',
    views: {
      'side-menu21': {
        templateUrl: 'templates/transaksi.html',
        controller: 'transaksiCtrl'
      }
    }
  })

  .state('beranda2', {
    url: '/beranda-menu',
    templateUrl: 'templates/beranda2.html',
    controller: 'beranda2Ctrl'
  })

  .state('beranda2.masuk', {
    url: '/page-masuk',
    views: {
      'side-menu21': {
        templateUrl: 'templates/masuk.html',
        controller: 'masukCtrl'
      }
    }
  })

  .state('beranda2.daftar', {
    url: '/page-daftar',
    views: {
      'side-menu21': {
        templateUrl: 'templates/daftar.html',
        controller: 'daftarCtrl'
      }
    }
  })

  .state('beranda2.rincianBarang', {
    url: '/page-rincian',
    views: {
      'side-menu21': {
        templateUrl: 'templates/rincianBarang.html',
        controller: 'rincianBarangCtrl'
      }
    }
  })

  .state('rincianBarangNamaBarang', {
    url: '/page-rincian',
    templateUrl: 'templates/rincianBarangNamaBarang.html',
    controller: 'rincianBarangNamaBarangCtrl'
  })

  .state('beranda2.profil', {
    url: '/page-profil',
    views: {
      'side-menu21': {
        templateUrl: 'templates/profil.html',
        controller: 'profilCtrl'
      }
    }
  })

  .state('formTransaksi', {
    url: '/page-form-transaksi',
    templateUrl: 'templates/formTransaksi.html',
    controller: 'formTransaksiCtrl'
  })

  .state('formPengataran', {
    url: '/page-form-pengantaran',
    templateUrl: 'templates/formPengataran.html',
    controller: 'formPengataranCtrl'
  })

  .state('mapsExample', {
    url: '/page12',
    templateUrl: 'templates/mapsExample.html',
    controller: 'mapsExampleCtrl'
  })

  .state('editProfil', {
    url: '/page-edit-profil',
    templateUrl: 'templates/editProfil.html',
    controller: 'editProfilCtrl'
  })

  .state('rincianTransaksi', {
    url: '/page-rincian-transaksi',
    templateUrl: 'templates/rincianTransaksi.html',
    controller: 'rincianTransaksiCtrl'
  })

  .state('formPembayaran', {
    url: '/page-form-pembayaran',
    templateUrl: 'templates/formPembayaran.html',
    controller: 'formPembayaranCtrl'
  })

  .state('dataMahasiswa', {
    url: '/data_mahasiswa',
    templateUrl: 'templates/dataMahasiswa.html',
    controller: 'dataMahasiswaCtrl'
  })
  

$urlRouterProvider.otherwise('/beranda-menu/page-beranda')


});
'use strict';

/**
 * @ngdoc function
 * @name engieOneAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the engieOneAppApp
 */
angular.module('engieOneAppApp')
  .controller('MainCtrl', MainCtrl);

function MainCtrl(prompt, $uibModal, $log) {
  var vm = this;
  vm.showJumbotron = true;
  vm.buttonClick = buttonClick;
  vm.modalClick = modalClick;
  vm.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];

  function buttonClick() {
    // vm.showJumbotron = !vm.showJumbotron;

    prompt({
      title: 'Delete this Thing?',
      message: 'Are you sure you want to do that?',
      buttons: [
        {
          label: 'OK',
          primary: true,
          cancel: false,
          class: '',
          style: 'color: black;'
        },
        {
          label: 'Cancel',
          primary: false,
          cancel: true,
          class: '',
          style: ''
        }
      ]

      }).then(function(){
        //hit ok and not cancel
    });
  }

  function modalClick() {
    var modalInstance = $uibModal.open({
      templateUrl: 'views/myModalContent.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: 'modalVM',
    });

    modalInstance.result.then(function () {
      $log.info('modal closed with OK');
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  }



}

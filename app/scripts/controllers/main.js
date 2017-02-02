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

function MainCtrl(prompt) {
  var vm = this;
  vm.showJumbotron = true;
  vm.buttonClick = buttonClick;
  vm.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];

  function buttonClick() {
    // vm.showJumbotron = !vm.showJumbotron;

    prompt({
      title: 'Delete this Thing?',
      message: 'Are you sure you want to do that?'
      }).then(function(){
        //he hit ok and not cancel
    });
  }



}

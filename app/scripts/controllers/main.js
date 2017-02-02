'use strict';

/**
 * @ngdoc function
 * @name engieOneAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the engieOneAppApp
 */
angular.module('engieOneAppApp')
  .controller('MainCtrl', function () {
    var vm = this;
    vm.showJumbotron = true;
    vm.hideElement = hideElement;
    vm.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    function hideElement() {
      vm.showJumbotron = !vm.showJumbotron;
    }
  });

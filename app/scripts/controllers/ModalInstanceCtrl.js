angular.module('engieOneAppApp')
  .controller('ModalInstanceCtrl', ModalInstanceCtrl);

function ModalInstanceCtrl($uibModalInstance) {
  var vm = this;
  // vm.items = items;
  // vm.selected = {
  //   item: vm.items[0]
  // };

  vm.ok = function () {
    $uibModalInstance.close();
  };

  vm.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
}

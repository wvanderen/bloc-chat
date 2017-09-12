(function () {
  function ModalInstanceCtrl ($uibModalInstance) {
    //Initializing modal

    var $ctrl = this;

    $ctrl.ok = function () {
    $uibModalInstance.close($ctrl.selected.item);
  };

  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

  angular
      .module('blocChat')
      .controller('modalInstanceCtrl', ['$uibModalInstance', modalInstanceCtrl])
})();

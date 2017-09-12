(function () {
  function ModalCtrl ($uibModal, Room) {
    //Initializing modal

    this.open = function () {
      var modalInstance = $uibModal.open({
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: '/templates/modal.html',
        controller: 'ModalCtrl as modal',
      })
    return modalInstance;
  };

    //modal submit
    this.submit = function() {
      Room.add();
    };

    this.close = function(reason) {
      $uibModalInstance.dismiss(reason);
    };

  };

  angular
      .module('blocChat')
      .controller('ModalCtrl', ['$uibModal', 'Room', ModalCtrl])
})();

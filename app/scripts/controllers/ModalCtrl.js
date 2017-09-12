(function () {
  function ModalCtrl ($uibModal, Room) {
    //Initializing modal

    this.open = function () {
      ModalCtrl.modalInstance = $uibModal.open({
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: '/templates/modal.html',
        controller: 'ModalCtrl as modal',
      })
  };

    //modal submit
    this.submit = function() {
      Room.add(this.roomName);
      this.roomName = null;
      ModalCtrl.modalInstance.close();
    };

    this.close = function() {
      ModalCtrl.modalInstance.dismiss();
    };

  };

  angular
      .module('blocChat')
      .controller('ModalCtrl', ['$uibModal', 'Room', ModalCtrl])
})();

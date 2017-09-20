(function() {
  function BlocChatCookies ($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      this.usernameModalInstance = $uibModal.open({
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: '/templates/usernameModal.html',
            controller: 'UsernameModalCtrl as modal',
    })
  }
}

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies])
})();

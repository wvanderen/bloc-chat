(function () {
  function UsernameModalCtrl ($uibModal, $cookies) {


    this.save = function() {
      if (!this.username || this.username === '') {
        alert('You must enter a username to continue');
      } else {
        $cookies.put('blocChatCurrentUser', this.username);
          usernameModalInstance.close();
      };
    }
  }

  angular
      .module('blocChat')
      .controller('UsernameModalCtrl', ['$uibModal', '$cookies', UsernameModalCtrl])
})();

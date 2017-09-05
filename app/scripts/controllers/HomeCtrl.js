(function () {
  function HomeCtrl(Room) {
    this.roomData = Room.rooms;
  }


  angular
      .module('blocChat')
      .controller('HomeCtrl', ['Room', HomeCtrl])
})();

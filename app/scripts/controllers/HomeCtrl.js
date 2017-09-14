(function () {
  function HomeCtrl(Room, Message) {
    //Makes room data available in home template
    this.roomData = Room.all;
    //object in which active room is stored.
    this.activeRoom = null;

    this.activeMessages;

    this.clickHandler = function (room) {
    Message.getByRoomID(activeRoom);
    this.activeRoom = room;
    console.log(room); //room.$id
  };
};



  angular
      .module('blocChat')
      .controller('HomeCtrl', ['Room', 'Message', HomeCtrl])
})();

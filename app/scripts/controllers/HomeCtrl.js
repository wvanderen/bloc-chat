(function () {
  function HomeCtrl(Room, Message) {
    //Makes room data available in home template
    this.roomData = Room.all;
    //object in which active room is stored.
    this.activeRoom;

    this.activeMessages;

    this.clickHandler = function(room) {
      this.activeRoom = room;
      this.activeMessages = Message.getByRoomID(room.$id);
      console.log(this.activeRoom); //room.$id
      console.log(this.activeMessages);
  };
};



  angular
      .module('blocChat')
      .controller('HomeCtrl', ['Room', 'Message', HomeCtrl])
})();

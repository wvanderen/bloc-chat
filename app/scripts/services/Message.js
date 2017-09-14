(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    //Filters messages by room ID
    this.getByRoomID = function(roomID) {
      //home.activeMessages = ref.orderByChild("roomID").equalTo(roomID);
    };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message])
})

(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);


    //Filters messages by room ID
    Message.getByRoomID = function(roomID) {
      var activeMessages;
      ref.orderByChild('roomID').equalTo(roomID).on('value', function(snapshot) {
        activeMessages = snapshot.val();
      });
      return activeMessages;

    };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message])
})();

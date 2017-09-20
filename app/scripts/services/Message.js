(function() {
  function Message($firebaseArray, $cookies) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.getByRoomID = function(roomID) {
      return $firebaseArray(ref.orderByChild('roomID').equalTo(roomID));

    };

    Message.send = function(newMessage, room) {
      var message = {
        content: newMessage,
        username: $cookies.get('blocChatCurrentUser'),
        roomID: room.$id,
        sentAt: firebase.database.ServerValue.TIMESTAMP,
      };

      console.log(message);

      messages.$add(message);
    }

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message])
})();

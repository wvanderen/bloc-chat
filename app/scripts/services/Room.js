(function() {
  function Room($firebaseArray) {
    //Create room array and align it with firebase
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Room.all = rooms;
    //Add new room when going through modal
    Room.add = function(room) {

      rooms.$add(room);
    };

    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();

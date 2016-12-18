var _ = require('lodash');

module.exports = function (injected) {

    return function (history) {

        var gamefull=false;
        var board=new Arr(9);
        var playerTurn='X'

        function processEvent(event) {
          if(event.type==="GameJoined"){
            gamefull=true;
          }
          if(event.type==="MovePlaced") {
               board[event.placeAt] = event.side;
               switchPlayers();
          }
        }

        function processEvents(history) {
            _.each(history, processEvent);
        }
        function gameFull(){
            return gamefull;
        }
        function switchPlayers() {
           if (playerTurn == 'X'){
               playerTurn = 'O';
           }
           else {
               playerTurn = 'X';
           }
         }
        function isPlayersTurn(side) {
            if (side == playerTurn){
                return true;
            }
            return false;
          }

        processEvents(history);

        return {
            gameFull:gameFull,
            isPlayersTurn:isPlayersTurn,
            processEvents: processEvents
        }
      };
    };

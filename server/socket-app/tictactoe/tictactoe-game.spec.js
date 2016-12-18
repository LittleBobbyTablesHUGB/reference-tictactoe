var should = require('should');
var _ = require('lodash');

var TictactoeState = require('./tictactoe-state')(inject({}));

var tictactoe = require('./tictactoe-handler')(inject({
    TictactoeState
}));


describe('create game command', function() {


    var given, when, then;

    beforeEach(function(){
        given=undefined;
        when=undefined;
        then=undefined;
    });

    afterEach(function () {
        tictactoe(given).executeCommand(when, function(actualEvents){
            should(JSON.stringify(actualEvents)).be.exactly(JSON.stringify(then));
        });
    });


    it('should emit game created event', function(){

        given = [];
        when =
        {
            id:"123",
            type: "CreateGame",
            user: {
                userName: "TheGuy"
            },
            name: "TheFirstGame",
            timeStamp: "2014-12-02T11:29:29"
        };
        then = [
            {
                type: "GameCreated",
                user: {
                    userName: "TheGuy"
                },
                name: "TheFirstGame",
                timeStamp: "2014-12-02T11:29:29",
                side:'X'
            }
        ];

    })
});


describe('join game command', function () {


    var given, when, then;

    beforeEach(function () {
        given = undefined;
        when = undefined;
        then = undefined;
    });

    afterEach(function () {
        tictactoe(given).executeCommand(when, function (actualEvents) {
            should(JSON.stringify(actualEvents)).be.exactly(JSON.stringify(then));
        });
    });


    it('should emit game joined event...', function () {

          given = [{
              type: "GameCreated",
              user: {
                  userName: "TheGuy"
              },
              name: "TheFirstGame",
              timeStamp: "2014-12-02T11:29:29"
          }
          ];
          when =
          {
              type: "JoinGame",
              user: {
                  userName: "Fanney"
              },
              name: "TheFirstGame",
              timeStamp: "2014-12-02T11:29:29"
          };
          then = [
              {
                  type: "GameJoined",
                  user: {
                      userName: "Fanney"
                  },
                  name: "TheFirstGame",
                  timeStamp: "2014-12-02T11:29:29",
                  side:'O'
              }
          ];

      });

      it('should emit FullGameJoinAttempted event when game full..implement this', function () {

        given = [
          {
            type: "GameCreated",
            user: {
                userName: "TheGuy"
            },
            name: "TheFirstGame",
            timeStamp: "2014-12-02T11:29:29"
        },
        {
            type: "GameJoined",
            user: {
                userName: "Fanney"
            },
            name: "TheFirstGame",
            timeStamp: "2014-12-02T11:29:29",
            side:'O'
        }
      ];
      When=[
      {
          type: "JoinGame",
          user: {
              userName: "Gummi"
          },
          name: "TheFirstGame",
          timeStamp: "2014-12-02T11:30:29"
      }
    ];
      then = [
          {
              type: "FullGameJoinAttempted",
              user: {
                  userName: "Gummi"
              },
              name: "TheFirstGame",
              timeStamp: "2014-12-02T11:30:29"
          }
      ];
    });
  });
  describe('Place move command', function() {


      var given, when, then;

      beforeEach(function(){
          given=undefined;
          when=undefined;
          then=undefined;
      });

      afterEach(function () {
          tictactoe(given).executeCommand(when, function(actualEvents){
              should(JSON.stringify(actualEvents)).be.exactly(JSON.stringify(then));
          });
      });

      it('should emit MovePlaced on first game move', function () {

        given = [{
            type: "GameCreated",
            user: {
                userName: "TheGuy"
            },
            name: "TheFirstGame",
            timeStamp: "2014-12-02T11:29:29"
          },
          {
            type: "GameJoined",
            user: {
                userName: "Fanney"
            },
            name: "TheFirstGame",
            timeStamp: "2014-12-02T11:29:29",
            side:'O'
        }
      ];
      when =
        {
            type: "PlaceMove",
            user:{
                userName: "TheGuy"
            },
            name: "TheFirstGame",
            timeStamp:"2014-12-02T11:30:29",
            side:'X'

        };
        then = [{
              type:"MovePlaced",
              user:{
                  userName: "TheGuy"
              },
              name: "TheFirstGame",
              timeStamp:"2014-12-02T11:30:29",
              side:'X'
          }

        ];

      });
    it('should emit Not Your Move if player is attempting to make move out of turn', function () {
          given = [{
              type: "GameCreated",
              user: {
                  userName: "TheGuy"
              },
              name: "TheFirstGame",
              timeStamp: "2014-12-02T11:29:29"
          },
          {
              type: "GameJoined",
              user: {
                  userName: "Fanney"
              },
              name: "TheFirstGame",
              timeStamp: "2014-12-02T11:29:29",
              side: 'O'
          },
          {
              type: "MovePlaced",
              user: {
                  userName: "TheGuy"
              },
              name: "TheFirstGame",
              timeStamp: "2014-12-02T11:30:29",
              side: 'X'
            }
        ];
        when =
        {
            type: "PlaceMove",
            user: {
                userName: "TheGuy"
            },
            name: "TheFirstGame",
            timeStamp: "2014-12-02T11:31:31",
            side: 'X'
        };
        then = [{
            type: "NotYourMove",
            user: {
                userName: "TheGuy"
            },
            name: "TheFirstGame",
            timeStamp: "2014-12-02T11:31:31",
            side: 'X'

        }
        ];
    });
});

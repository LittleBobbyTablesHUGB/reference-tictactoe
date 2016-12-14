module.exports=function(injected){
    const socketIoVerb = injected('socketIoVerb');
    const messageRouter = injected('messageRouter');

    return {
        startDispatching: function(_socket, _session){
            var socket = _socket;
            var session = _session;

            var listener;
            listener = (message)=>{
                message._session = session;
<<<<<<< HEAD
               // console.debug("Incoming message from socket.io: " + socketIoVerb + " message: ", message );
=======
                //console.debug("Incoming message from socket.io: " + socketIoVerb + " message: ", message );
>>>>>>> 3a8925edddd36f82ffc9721398b3c57061aea8a4
                messageRouter.routeMessage(message);
            };

            socket.on(socketIoVerb, listener);
            return {
                stopDispatching:function(){
                    socket.removeListener(socketIoVerb, listener);
                }
            }
        }
    };
};

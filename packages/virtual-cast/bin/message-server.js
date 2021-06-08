let state = {
  senders: [],
  receivers: []
};

const statusReport = () => ({
  data: JSON.stringify({
    type: "HUB_STATUS",
    receivers: state.receivers.length
  })
});

const parseMessage = message => {
  try {
    const parsed = JSON.parse(message);
    return {
      ...parsed,
      data: parsed.data && JSON.parse(parsed.data)
    };
  } catch (e) {
    return message;
  }
};

const createServer = () => {
  const url = require("url");
  const http = require("http");
  const WebSocket = require("ws");

  const server = http.createServer();
  const receiverHub = new WebSocket.Server({ noServer: true });
  const senderHub = new WebSocket.Server({ noServer: true });

  receiverHub.on("connection", socket => {
    console.log("receiver connected");
    state.receivers.push(socket);
    socket.on(
      "close",
      () => (state.receivers = state.receivers.filter(it => it !== socket))
    );
    socket.on("message", message => {
      console.log(">>", parseMessage(message));
      state.senders.forEach(socket => socket.send(message));
    });
  });

  senderHub.on("connection", socket => {
    console.log("sender connected");
    state.senders.push(socket);
    socket.on(
      "close",
      () => (state.senders = state.senders.filter(it => it !== socket))
    );
    socket.send(JSON.stringify(statusReport()));

    socket.on("message", message => {
      const senderMessage = JSON.parse(message);

      if (senderMessage) {
        console.log("<<", parseMessage(message));
        state.receivers.forEach(socket => socket.send(message));
      }
    });
  });

  server.on("upgrade", function upgrade(request, socket, head) {
    const pathname = url.parse(request.url).pathname;

    if (pathname === "/v2/ipc") {
      receiverHub.handleUpgrade(request, socket, head, socket => {
        receiverHub.emit("connection", socket, request);
      });
    } else if (pathname === "/sender") {
      senderHub.handleUpgrade(request, socket, head, socket =>
        senderHub.emit("connection", socket, request)
      );
    } else {
      socket.destroy();
    }
  });

  server.listen(8008);
};

createServer();

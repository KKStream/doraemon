import {
  loadMessage,
  pauseMessage,
  playMessage,
  readyMessages,
  seekMessage
} from "./messages";

const sendMessage = (socket, message) =>
  socket.send(
    JSON.stringify({
      ...message,
      data: message.data && JSON.stringify(message.data)
    })
  );

const parseMessage = message => {
  const { data, ...rest } = JSON.parse(message);
  return { ...rest, data: JSON.parse(data) };
};

const connectCast = async () => {
  let onConnect;
  const handleMessage = (socket, message) => {
    if (message.data.type === "ready") {
      readyMessages.forEach(message => sendMessage(socket, message));
    }
  };
  const retry = () => {
    const socket = Object.assign(new WebSocket("ws://localhost:8008/sender"), {
      onopen: () => {
        console.log("connected to server socket");
        onConnect(socket);
      },
      onmessage: event => {
        handleMessage(socket, parseMessage(event.data));
      },
      onerror: () => setTimeout(retry, 5000)
    });
  };

  return new Promise(resolve => {
    onConnect = resolve;
    retry();
  });
};

const loadMedia = (socket, options) => {
  sendMessage(socket, loadMessage(options));
};

const playOrPause = socket => {
  if (socket.paused) {
    sendMessage(socket, playMessage());
  } else {
    sendMessage(socket, pauseMessage());
  }
  socket.paused = !socket.paused;
};

const seek = (socket, time) => sendMessage(socket, seekMessage(time));

export { connectCast, loadMedia, playOrPause, seek };

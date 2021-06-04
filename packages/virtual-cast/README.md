# Vitural Cast

No real device Google Cast app development.

## Quick Start

Start socket server with npx:

```sh
npx vitural-cast
```

or run from this repository:

```sh
node ./bin/message-server
```

Open [vitutal sender](https://vitural-cast.netlify.app).

Start development server for your Google Cast app, and open it **in a browser**.

## How does this Work

Inspired by [chromecast-device-emulator](https://github.com/ajhsu/chromecast-device-emulator).

CAF communicate with chromecast hardware with `wss://localhost:8008/v2/ipc`, we can start a server do the same thing.

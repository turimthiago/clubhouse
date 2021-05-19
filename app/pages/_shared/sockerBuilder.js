import { constants } from "./constants.js";

export default class SockerBuilder {
  constructor({ sockerUrl, namespace }) {
    this.sockerUrl = `${sockerUrl}/${namespace}`;
    this.onUserConnected = () => {};
    this.onUserDisconnected = () => {};
  }

  setOnUserConnected(fn) {
    this.onUserConnected = fn;
    return this;
  }

  setOnUserDisconnected(fn) {
    this.onUserDisconnected = fn;
    return this;
  }

  buid() {
    const socket = globalThis.io.connect(this.sockerUrl, {
      withCredentials: false,
    });
    socket.on("connection", () => console.log("[Servidor connectado!]"));
    socket.on(constants.events.USER_CONNECTED, this.onUserConnected);
    socket.on(constants.events.USER_DISCONNECTED, this.onUserDisconnected);
    return socket;
  }
}

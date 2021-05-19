import { constants } from "../_shared/constants.js";
import SockerBuilder from "../_shared/sockerBuilder.js";

const socket = new SockerBuilder({
  sockerUrl: constants.socketUrl,
  namespace: constants.socketNamespaces.room,
})
  .setOnUserConnected((user) => console.log("user connected!", user))
  .setOnUserDisconnected((user) => console.log("user disconnected!", user))
  .buid();
const room = {
  id: Date.now(),
  topic: "JS Expert",
};
const user = {
  img: "https://cdn1.iconfinder.com/data/icons/user-avatar-20/64/47-nurse-256.png",
  username: "Thiago Turim",
};
socket.emit(constants.events.JOIN_ROOM, { user, room });

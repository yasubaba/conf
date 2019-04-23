import { toJS } from "mobx";
import { createLogger } from "../../shared/logger";
import { isValidRoomName, isValidRoomType } from "../../shared/validate";
import RootStore from "../stores";

const logger = createLogger("conf:action:onAppLoad");

export const onAppLoad = async ({ ui, client }: RootStore) => {
  const [, roomType, roomName] = location.hash.split("/");
  if (!(isValidRoomType(roomType) && isValidRoomName(roomName))) {
    ui.showError(new Error("Invalid room type and/or room name."));
    return;
  }

  logger.info(`room: ${roomType}/${roomName}`);

  // get permission to enumerateDevices()
  const stream = (await navigator.mediaDevices
    .getUserMedia({ audio: true, video: true })
    .catch(ui.showError)) as MediaStream;

  const devices = await navigator.mediaDevices
    .enumerateDevices()
    .catch(ui.showError);

  client.load({
    ua: navigator.userAgent,
    devices: devices || [],
    name: localStorage.getItem("SkyWayConf.dispName") || "YOUR_NAME"
  });

  // release refs
  stream.getTracks().forEach(track => track.stop());

  logger.info(
    "client loaded",
    toJS(client.browser),
    client.videoInDevices,
    client.audioInDevices
  );
};
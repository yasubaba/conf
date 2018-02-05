import { extendObservable } from 'mobx';

class UiStore {
  constructor({ roomType, roomName }) {
    extendObservable(this, {
      roomType,
      roomName,
      isSettingOpen: true,
      isRoomJoin: false,
      hasError: null,
    });
  }
}

export default UiStore;
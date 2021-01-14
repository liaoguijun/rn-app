import {observable, computed, action, decorate} from 'mobx';

class Homestore {
  // state
  appName = 'app1';
  appBaseData = {};

  // getter
  get skinWindow() {
    return {
      width: this.appName,
      height: this.appBaseData,
    };
  }

  // action
  setAppName(payload: any) {
    this.appName = payload;
  }
}

decorate(Homestore, {
  appName: observable,
  appBaseData: observable,
  skinWindow: computed,
  setAppName: action,
});

export default Homestore;

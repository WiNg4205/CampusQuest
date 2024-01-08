let modeUpdateCallback = null;

function setModeUpdateCallback(callback) {
  modeUpdateCallback = callback;
}

function notifyModeUpdate(locationModeActive) {
  if (modeUpdateCallback) {
    modeUpdateCallback(locationModeActive);
  }
}

export { setModeUpdateCallback, notifyModeUpdate }
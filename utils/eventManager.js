window.eventManager = {
  events: {},
};

const listEvents = () => Object.keys(window.eventManager.events);

const addEvent = (type, callback) => {
  if (!window.eventManager.events[type]) {
    window.eventManager.events[type] = [callback];
    return;
  }
  window.eventManager.events[type].push(callback);
};

const triggerEvent = (type, payload) =>
  window.eventManager.events[type] &&
  window.eventManager.events[type].map((callback) => callback(payload));

window.eventManager = {
  ...window.eventManager,
  addEvent,
  triggerEvent,
  listEvents,
};

export default window.eventManager;

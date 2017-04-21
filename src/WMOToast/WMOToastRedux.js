import Immutable from 'seamless-immutable';

/* ------------- Toast actions ------------- */

export const actions = {
  DISPLAY_ERROR: '@@WMOTOAST/DISPLAY_ERROR',
  DISPLAY_WARNING: '@@WMOTOAST/DISPLAY_WARNING',
  DISPLAY_INFO: '@@WMOTOAST/DISPLAY_INFO',
  HIDE: '@@WMOTOAST/HIDE'
};

const toastAction = (message, duration, type) => ({
  type,
  payload: {
    message,
    duration
  }
});

export const actionCreators = {
  hide() {
    return {
      type: actions.HIDE,
      payload: {}
    };
  },
  displayError(message, duration = 4000) {
    return toastAction(message, duration, actions.DISPLAY_ERROR);
  },
  displayWarning(message, duration = 4000) {
    return toastAction(message, duration, actions.DISPLAY_WARNING);
  },
  displayInfo(message, duration = 4000) {
    return toastAction(message, duration, actions.DISPLAY_INFO);
  }
};

/* ------------- Toast reducer ------------- */

const defaultState = {
  message: null,
  error: false,
  warning: false,
  duration: null
};

export function reducer(state = Immutable(defaultState), action) {
  switch (action.type) {
    case actions.HIDE:
    case actions.DISPLAY_ERROR:
    case actions.DISPLAY_WARNING:
    case actions.DISPLAY_INFO: {
      return state.merge(
        {
          message: action.payload.message,
          duration: action.payload.duration,
          error: action.type === actions.DISPLAY_ERROR,
          warning: action.type === actions.DISPLAY_WARNING
        },
        { deep: true }
      );
    }
    default: {
      return state;
    }
  }
}

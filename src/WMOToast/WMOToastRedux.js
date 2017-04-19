import Immutable from 'seamless-immutable';

import { stringArrayToObject } from '../redux/reduxUtils';

/* ------------- Toast actions ------------- */

export const actions = stringArrayToObject(['DISPLAY_ERROR', 'DISPLAY_WARNING', 'DISPLAY_INFO', 'HIDE']);

export const actionCreators = {
  hide() {
    return {
      type: actions.HIDE
    };
  },
  displayError(message, duration = 4000) {
    return {
      type: actions.DISPLAY_ERROR,
      payload: {
        message,
        duration
      }
    };
  },
  displayWarning(message, duration = 4000) {
    return {
      type: actions.DISPLAY_WARNING,
      payload: {
        message,
        duration
      }
    };
  },
  displayInfo(message, duration = 4000) {
    return {
      type: actions.DISPLAY_INFO,
      payload: {
        message,
        duration
      }
    };
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
    case actions.DISPLAY_INFO: {
      return state.merge(
        {
          message: action.payload.message,
          duration: action.payload.duration,
          error: false,
          warning: false
        },
        { deep: true }
      );
    }
    case actions.DISPLAY_WARNING: {
      return state.merge(
        {
          message: action.payload.message,
          duration: action.payload.duration,
          error: false,
          warning: true
        },
        { deep: true }
      );
    }
    case actions.DISPLAY_ERROR: {
      return state.merge(
        {
          message: action.payload.message,
          duration: action.payload.duration,
          error: true,
          warning: false
        },
        { deep: true }
      );
    }
    case actions.HIDE: {
      return state.merge(
        {
          message: null,
          duration: null,
          error: false,
          warning: false
        },
        { deep: true }
      );
    }
    default: {
      return state;
    }
  }
}

import { WMORequestResult } from 'wolmo-core-rn';

export const actions = {
  FETCHING_SOMETHING: 'FETCHING_SOMETHING',
  FETCH_SOMETHING_SUCCESS: 'FETCH_SOMETHING_SUCCESS',
  FETCH_SOMETHING_FAILURE: 'FETCH_SOMETHING_FAILURE'
};

export const actionCreators = {
  fetchingSomething() {
    return {
      type: actions.FETCHING_SOMETHING
    };
  },
  fetchSomethingSuccess(result) {
    return {
      type: actions.FETCH_SOMETHING_SUCCESS,
      payload: {
        result
      }
    };
  },
  fetchSomethingFailure(error) {
    return {
      type: actions.FETCH_SOMETHING_FAILURE,
      payload: {
        error
      }
    };
  },
  fetchSomething() {
    return dispatch => {
      dispatch(actionCreators.fetchingSomething());
      setTimeout(() => {
        dispatch(actionCreators.fetchSomethingSuccess('result'));
      }, 1500);
    };
  },
  fetchSomethingNetworkError() {
    return dispatch => {
      dispatch(actionCreators.fetchingSomething());
      setTimeout(() => {
        dispatch(actionCreators.fetchSomethingFailure(WMORequestResult.NETWORK_ERROR));
      }, 1500);
    };
  },
  fetchSomethingServerError() {
    return dispatch => {
      dispatch(actionCreators.fetchingSomething());
      setTimeout(() => {
        dispatch(actionCreators.fetchSomethingFailure(WMORequestResult.SERVER_ERROR));
      }, 1500);
    };
  }
};

const defaultState = {
  loading: false,
  error: null,
  result: null
};

export function reducer(state = defaultState, action) {
  switch (action.type) {
    case actions.FETCHING_SOMETHING:
      return {
        ...state,
        loading: true
      };
    case actions.FETCH_SOMETHING_SUCCESS:
      return {
        loading: false,
        error: null,
        result: action.payload.result
      };
    case actions.FETCH_SOMETHING_FAILURE:
      return {
        loading: false,
        error: action.payload.error,
        result: null
      };
    default: {
      return state;
    }
  }
}

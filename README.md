# Wolmo Core RN

## WMOWithRequest

withRequest is a High Order Component that wraps a request and a way to retry it if it fails.

## Example


## Example using redux

```js
import { connect } from 'react-redux';
import { withRequest } from 'wolmo-core-rn';

import ExampleComponent from './ExampleComponent';

const mapDispatchToProps = dispatch => ({
  onFetch: () => dispatch(/* some action */)
});

const mapStateToProps = state => ({
  loading: state.
  * `loading`
  result: state.result,
  error: state.error
});

const withRequestOptions = {
  onRequest: props => props.onFetch(),
  loading: props => props.loading,
  error: props => props.error
};

const ExampleComponentWithRequest = WMOWithRequest(withRequestOptions)(ExampleComponent);

export default connect(mapStateToProps, mapDispatchToProps)(ExampleComponentWithRequest);
```

## API

### `withRequest(withRequestOptions)`

#### Arguments

* `withRequestOptions` *(Object)* options:

  * `onRequest` *(Function)* The request handler. `onRequest` will be called on `componentWillMount` and on a retry.
  * `loading` *(Function)* Receives the props and should return a *(Boolean)* to indicate a loading state.
  * `error` *(Function)* Receives the props and should return a error code (from `WMORequestErrors`) or `null` if there is no error.
    * The possible error codes are `CLIENT_ERROR`, `SERVER_ERROR` and `NETWORK_ERROR`.
  * [`loadingComponent`] *(Component)* The component to be rendered while loading.
  * [`networkErrorComponent`] *(Component)* The component to be rendered in case of a network error.
  * [`serverErrorComponent`] *(Component)* The component to be rendered in case of a server error.

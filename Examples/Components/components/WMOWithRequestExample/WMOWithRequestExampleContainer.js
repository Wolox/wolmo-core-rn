import { connect } from 'react-redux';
import { WMOWithRequest } from 'wolmo-core-rn';

import WMOWithRequestExample from './WMOWithRequestExample';
import { actionCreators as exampleActionCreators } from '../../reducers/withRequestExample';

const mapDispatchToProps = dispatch => ({
  onFetch: () => dispatch(exampleActionCreators.fetchSomething()),
  onFetchServerError: () => dispatch(exampleActionCreators.fetchSomethingServerError()),
  onFetchNetworkError: () => dispatch(exampleActionCreators.fetchSomethingNetworkError())
});

const mapStateToProps = state => ({
  loading: state.withRequestExample.loading,
  result: state.withRequestExample.result,
  error: state.withRequestExample.error
});

const withRequestOptions = {
  onRequest: props => {
    props.onFetch();
  },
  mapProps: props => ({
    loading: props.loading,
    result: props.error
  })
};

const WMOWithRequestExampleWithRequest = WMOWithRequest(withRequestOptions)(WMOWithRequestExample);

export default connect(mapStateToProps, mapDispatchToProps)(WMOWithRequestExampleWithRequest);

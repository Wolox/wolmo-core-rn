import React, { Component } from 'react';
import DefaultLoading from './DefaultLoading';
import DefaultRetryError from './DefaultRetryError';

export const WMORequestErrors = {
  CLIENT_ERROR: 'CLIENT_ERROR',
  SERVER_ERROR: 'SERVER_ERROR',
  NETWORK_ERROR: 'NETWORK_ERROR'
};

function withRequestWrapper(
  WrappedComponent,
  { onRequest, loadingComponent, loading, error, networkErrorComponent, serverErrorComponent }
) {
  class WithRequestComponent extends Component {
    componentWillMount() {
      this.handleRequest();
    }

    handleRequest = () => {
      onRequest(this.props);
    };

    render() {
      if (loading(this.props)) {
        return React.createElement(loadingComponent || DefaultLoading);
      }

      const requestError = error(this.props);

      if (requestError === WMORequestErrors.NETWORK_ERROR) {
        return networkErrorComponent
          ? React.createElement(networkErrorComponent(this.handleRequest))
          : <DefaultRetryError text="Network error" onRetry={this.handleRequest} />;
      }

      if (requestError === WMORequestErrors.SERVER_ERROR) {
        return serverErrorComponent
          ? React.createElement(serverErrorComponent(this.handleRequest))
          : <DefaultRetryError text="Server error" onRetry={this.handleRequest} />;
      }

      return <WrappedComponent {...this.props} />;
    }
  }

  return WithRequestComponent;
}

export function withRequest(options) {
  return WrappedComponent => withRequestWrapper(WrappedComponent, options);
}

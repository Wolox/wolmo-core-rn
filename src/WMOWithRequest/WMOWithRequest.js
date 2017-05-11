import React, { Component } from 'react';
import DefaultLoading from './DefaultLoading';
import { customRetryError } from './DefaultRetryError';

export const WMORequestErrors = {
  CLIENT_ERROR: 'CLIENT_ERROR',
  SERVER_ERROR: 'SERVER_ERROR',
  NETWORK_ERROR: 'NETWORK_ERROR'
};

function withRequestWrapper(
  WrappedComponent,
  {
    onRequest,
    LoadingComponent = DefaultLoading,
    loading,
    error,
    NetworkErrorComponent = customRetryError('Network error'),
    ServerErrorComponent = customRetryError('Server error')
  }
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
        return <LoadingComponent />;
      }

      const requestError = error(this.props);

      if (requestError === WMORequestErrors.NETWORK_ERROR) {
        return <NetworkErrorComponent onRetry={this.handleRequest} />;
      }

      if (requestError === WMORequestErrors.SERVER_ERROR) {
        return <ServerErrorComponent onRetry={this.handleRequest} />;
      }

      return <WrappedComponent {...this.props} />;
    }
  }

  return WithRequestComponent;
}

export function withRequest(options) {
  return WrappedComponent => withRequestWrapper(WrappedComponent, options);
}

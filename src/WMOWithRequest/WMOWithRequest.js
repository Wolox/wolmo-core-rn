import React, { Component } from 'react';
import DefaultLoading from './DefaultLoading';
import DefaultRetryError from './DefaultRetryError';

export const WMORequestResult = {
  CLIENT_ERROR: 'CLIENT_ERROR',
  SERVER_ERROR: 'SERVER_ERROR',
  NETWORK_ERROR: 'NETWORK_ERROR',
  SUCCESS: 'SUCCESS'
};

function withRequestWrapper(
  WrappedComponent,
  { onRequest, loadingComponent, mapProps, networkErrorComponent, serverErrorComponent }
) {
  class WithRequestComponent extends Component {
    componentWillMount() {
      this.handleRequest();
    }

    handleRequest = () => {
      onRequest(this.props);
    };

    render() {
      const withRequestProps = mapProps(this.props);

      if (withRequestProps.loading) {
        return React.createElement(loadingComponent || DefaultLoading);
      }

      if (withRequestProps.result === WMORequestResult.NETWORK_ERROR) {
        return networkErrorComponent
          ? React.createElement(networkErrorComponent(this.handleRequest))
          : <DefaultRetryError text="Network error" onRetry={this.handleRequest} />;
      }

      if (withRequestProps.result === WMORequestResult.SERVER_ERROR) {
        return serverErrorComponent
          ? React.createElement(serverErrorComponent(this.handleRequest))
          : <DefaultRetryError text="Server error" onRetry={this.handleRequest} />;
      }

      return <WrappedComponent {...this.props} />;
    }
  }

  return WithRequestComponent;
}

export function WMOWithRequest(options) {
  return WrappedComponent => withRequestWrapper(WrappedComponent, options);
}

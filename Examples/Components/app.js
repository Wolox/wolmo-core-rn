import React, { Component } from 'react';
import { Button, View } from 'react-native';
import { WMOToastContainer, WMOToastActions } from 'wolmo-core-rn';
import { connect } from 'react-redux';

class ToastScene extends Component {
  displayErrorToast = () => {
    this.props.dispatch(WMOToastActions.displayError('Error toast!'));
  };

  displayWarningToast = () => {
    this.props.dispatch(WMOToastActions.displayWarning('Warning toast!'));
  };

  displayInfoToast = () => {
    this.props.dispatch(WMOToastActions.displayInfo('Info toast!'));
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF' }}>
        <Button title={'Info Toast!'} onPress={this.displayInfoToast} />
        <Button title={'Warning Toast!'} onPress={this.displayWarningToast} />
        <Button title={'Error Toast!'} onPress={this.displayErrorToast} />
        <WMOToastContainer />
      </View>
    );
  }
}

export default connect()(ToastScene);

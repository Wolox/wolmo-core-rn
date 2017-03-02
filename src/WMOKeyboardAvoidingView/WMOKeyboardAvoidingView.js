import React, { Component } from "react";
import ReactNative, { ScrollView, Platform, TextInput } from "react-native";

const isIos = Platform.OS === "ios";

export default class UTKeyboardAvoidingView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentRoute: props.activeRoute,
      keyboardStyle: null
    };
  }

  keyboardListeners = {
    // eslint-disable-line react/sort-comp
    android: {
      onKeyboardDidShow: this.handleKeyboardDidShow.bind(this),
      onKeyboardDidHide: this.handleKeyboardHide.bind(this)
    },
    ios: {
      onKeyboardWillShow: this.handleKeyboardWillShow.bind(this),
      onKeyboardWillHide: this.handleKeyboardHide.bind(this)
    }
  };

  componentIsPresent() {
    return this.state.componentRoute === this.props.activeRoute;
  }

  // https://github.com/facebook/react-native/blob/master/Libraries/Components/ScrollResponder.js#L89
  handleKeyboardDidShow(keyboard) {
    this.handleKeyboardShow(keyboard.endCoordinates);
  }

  // https://github.com/facebook/react-native/blob/master/Libraries/Components/ScrollResponder.js#L88
  handleKeyboardWillShow(keyboard) {
    this.handleKeyboardShow(keyboard.startCoordinates);
  }

  handleKeyboardShow(keyboardCoordinates) {
    if (!this.componentIsPresent()) {
      return;
    }

    const focusedField = TextInput.State.currentlyFocusedField();
    if (!focusedField) {
      return;
    }

    if (isIos) {
      this.focusedField = focusedField;
      this.setState({
        keyboardStyle: {
          paddingBottom: keyboardCoordinates.height
        }
      });
    }

    this.containerScrollView.scrollResponderScrollNativeHandleToKeyboard(
      ReactNative.findNodeHandle(focusedField),
      110, // additionalOffset
      true
    );
  }

  // https://github.com/facebook/react-native/blob/master/Libraries/Components/ScrollResponder.js#L101
  // https://github.com/facebook/react-native/blob/master/Libraries/Components/ScrollResponder.js#L100
  handleKeyboardHide() {
    if (!this.componentIsPresent()) {
      return;
    }
    if (this.focusedField && isIos) {
      this.containerScrollView.scrollResponderScrollNativeHandleToKeyboard(
        this.focusedField,
        -110,
        true
      );
    }

    setTimeout(
      () => {
        if (this.componentIsPresent()) {
          this.setState({ keyboardStyle: null });
        }
      },
      500
    );
  }

  render() {
    return (
      <ScrollView
        automaticallyAdjustContentInsets={false}
        bounces={false}
        keyboardDismissMode={"interactive"}
        ref={scrollview => this.containerScrollView = scrollview}
        {...this.props}
        {...this.keyboardListeners[Platform.OS]}
        contentContainerStyle={[this.props.contentContainerStyle, this.state.keyboardStyle]}
      >
        {this.props.children}
      </ScrollView>
    );
  }
}

UTKeyboardAvoidingView.propTypes = {
  ...ScrollView.propTypes
};

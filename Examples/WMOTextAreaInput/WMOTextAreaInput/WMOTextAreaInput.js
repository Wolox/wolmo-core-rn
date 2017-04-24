import React, { Component } from 'react';
import { View, TextInput, Keyboard } from 'react-native';
import styles from './WMOTextAreaInput.styles';

const addedHeightSize = 17;
const maxHeightArea = 80;

export default class WMOTextAreaInput extends Component {
  state = {
    shouldGrowArea: {
      height: 46
    },
    textAreaLimiter: {
      height: 20
    }
  };

  handleOnContentSizeChange = event => {
    const currentContentHeight = event.nativeEvent.contentSize.height;
    const totalHeight = currentContentHeight + addedHeightSize;
    const shoouldResizeArea =
      (currentContentHeight < maxHeightArea && totalHeight > this.state.shouldGrowArea.height) ||
      (currentContentHeight > addedHeightSize && totalHeight < this.state.shouldGrowArea.height);
    if (shoouldResizeArea) {
      this.setState({ shouldGrowArea: { height: totalHeight } });
    }
  };

  handleSubmitEditing = () => {
    if (this.props.onSubmitEditing) {
      this.props.onSubmitEditing();
      Keyboard.dismiss();
    } else if (this.props.nextInputGetter) {
      this.props.nextInputGetter().focus();
    }
  };

  render() {
    const {
      containerStyles,
      placeholder,
      onChange,
      onBlur,
      onFocus,
      value,
      keyboardType,
      autoCorrect,
      maxLength,
      returnKeyType,
      blurOnSubmit
    } = this.props;

    return (
      <View style={[styles.container, containerStyles, this.state.shouldGrowArea]}>
        <TextInput
          placeholder={placeholder}
          style={[styles.formAreaInput]}
          onChangeText={onChange}
          onBlur={onBlur}
          multiline
          onFocus={onFocus}
          value={value}
          autoCorrect={autoCorrect}
          onChange={this.handleOnContentSizeChange}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          blurOnSubmit={blurOnSubmit}
          onSubmitEditing={this.handleSubmitEditing}
          maxLength={maxLength}
          underlineColorAndroid={'transparent'}
          ref={input => (this.input = input)}
        />
      </View>
    );
  }
}

WMOTextAreaInput.defaultProps = {
  autoCorrect: true
};

WMOTextAreaInput.propTypes = {
  containerStyles: View.propTypes.style,
  autoCorrect: React.PropTypes.bool,
  onBlur: React.PropTypes.func,
  onChange: React.PropTypes.func,
  onFocus: React.PropTypes.func,
  placeholder: React.PropTypes.string,
  keyboardType: React.PropTypes.string,
  returnKeyType: React.PropTypes.string,
  blurOnSubmit: React.PropTypes.bool,
  onSubmitEditing: React.PropTypes.func,
  nextInputGetter: React.PropTypes.func,
  maxLength: React.PropTypes.number,
  value: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number])
};

import React, { Component } from 'react';
import { View, TextInput, Keyboard } from 'react-native';
import styles from './WMOTextAreaInput.styles';

const spacingHeightSize = 5;

export default class WMOTextAreaInput extends Component {
  state = {
    shouldGrowArea: {
      height: 29
    },
    currentNumberOfLines: 1,
    textAreaHeight: 29,
    comparePreviousHeight: 29
  };

  handleOnContentSizeChange = event => {
    const currentContentHeight = event.nativeEvent.contentSize.height;
    if (this.state.comparePreviousHeight < currentContentHeight) {
      if (this.state.currentNumberOfLines < this.props.maxNumberOfLines) {
        this.setState(prevState => ({
          textAreaHeight: currentContentHeight,
          comparePreviousHeight: currentContentHeight,
          currentNumberOfLines: prevState.currentNumberOfLines + 1
        }));
      } else {
        this.setState(prevState => ({
          currentNumberOfLines: prevState.currentNumberOfLines + 1,
          comparePreviousHeight: currentContentHeight
        }));
      }
    }
    if (this.state.comparePreviousHeight > currentContentHeight) {
      if (this.state.currentNumberOfLines <= this.props.maxNumberOfLines) {
        this.setState(prevState => ({
          textAreaHeight: currentContentHeight,
          comparePreviousHeight: currentContentHeight,
          currentNumberOfLines: prevState.currentNumberOfLines - 1
        }));
      } else {
        this.setState(prevState => ({
          currentNumberOfLines: prevState.currentNumberOfLines - 1,
          comparePreviousHeight: currentContentHeight
        }));
      }
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
      <View
        style={[styles.container, containerStyles, { height: this.state.textAreaHeight + spacingHeightSize }]}
      >
        <TextInput
          placeholder={placeholder}
          style={styles.formAreaInput}
          onChangeText={onChange}
          onBlur={onBlur}
          multiline
          onFocus={onFocus}
          value={value}
          autoCorrect={autoCorrect}
          onContentSizeChange={this.handleOnContentSizeChange}
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
  autoCorrect: true,
  maxNumberOfLines: 5
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
  maxNumberOfLines: React.PropTypes.number,
  value: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number])
};

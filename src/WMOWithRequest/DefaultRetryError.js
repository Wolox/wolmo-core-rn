import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import styles from './DefaultRetryError.styles';

export function customRetryError(text) {
  function DefaultRetryError({ retryText, onRetry, style }) {
    return (
      <View style={[styles.container, style]}>
        <Text>
          {text}
        </Text>
        <TouchableOpacity onPress={onRetry}>
          <Text>
            {retryText}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  DefaultRetryError.defaultProps = {
    retryText: 'RETRY'
  };

  DefaultRetryError.propTypes = {
    retryText: React.PropTypes.string,
    onRetry: React.PropTypes.func.isRequired
  };

  return DefaultRetryError;
}

import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import styles from './DefaultRetryError.styles';

function DefaultRetryError({ text, retryText, onRetry, style }) {
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
  text: React.PropTypes.string.isRequired,
  retryText: React.PropTypes.string,
  onRetry: React.PropTypes.func.isRequired
};

export default DefaultRetryError;

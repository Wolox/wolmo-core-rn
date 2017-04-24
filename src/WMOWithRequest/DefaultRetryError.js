import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

function DefaultRetryError({ text, retryText, onRetry }) {
  return (
    <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
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

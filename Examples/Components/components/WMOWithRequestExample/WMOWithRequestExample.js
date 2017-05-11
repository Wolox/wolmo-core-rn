import React from 'react';
import { View, Button, Text } from 'react-native';

export default function WMOWithRequestExample({ onFetch, onFetchServerError, onFetchNetworkError }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF' }}>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>
        WithRequest
      </Text>
      <Button title={'Fetch something'} onPress={onFetch} />
      <Button title={'Fetch something with server error'} onPress={onFetchServerError} />
      <Button title={'Fetch something with network error'} onPress={onFetchNetworkError} />
    </View>
  );
}

WMOWithRequestExample.propTypes = {
  onFetch: React.PropTypes.func.isRequired,
  onFetchServerError: React.PropTypes.func.isRequired,
  onFetchNetworkError: React.PropTypes.func.isRequired
};

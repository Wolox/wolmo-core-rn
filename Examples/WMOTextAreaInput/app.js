import React from 'react';
import { View, Text } from 'react-native';
//  import { WMOTextAreaInput } from 'wolmo-core-rn';
import { connect } from 'react-redux';
import WMOTextAreaInput from './WMOTextAreaInput/WMOTextAreaInput';

function TextAreaInput() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ marginBottom: 12 }}>Hello!, write all text that you want and enjoy :D ! </Text>
      <WMOTextAreaInput placeholder="Insert Text" />
    </View>
  );
}

export default connect()(TextAreaInput);

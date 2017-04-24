import React from 'react';
import { ActivityIndicator } from 'react-native';
import styles from './DefaultLoading.styles';

function DefaultLoading() {
  return <ActivityIndicator animating style={styles.activityIndicator} size="large" />;
}

export default DefaultLoading;

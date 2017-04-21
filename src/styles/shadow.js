import { StyleSheet } from 'react-native';

import { black } from './colors';

export default StyleSheet.create({
  style: {
    elevation: 10,
    shadowColor: black,
    shadowOpacity: 0.5,
    shadowRadius: 1,
    shadowOffset: {
      height: 0,
      width: 0
    }
  },
  onlyBottom: {
    shadowRadius: 0.75,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  onlyTop: {
    shadowRadius: 0.75,
    shadowOffset: {
      height: -1,
      width: 0
    }
  },
  spread: {
    shadowRadius: 5
  }
});

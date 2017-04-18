import { StyleSheet } from 'react-native';

import { red, yellow, blue, transparent } from '../styles/colors';

export function configColors({ error, warning, notice }) {
  red = error || red;
  yellow = warning || yellow;
  blue = notice || blue;
}

export default StyleSheet.create({
  container: {
    backgroundColor: transparent,
    bottom: 100,
    zIndex: 100,
    position: 'absolute',
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  messageContainer: {
    backgroundColor: blue,
    borderRadius: 20,
    marginHorizontal: 20,
    overflow: 'hidden',
    paddingVertical: 5,
    paddingHorizontal: 15
  },
  error: {
    backgroundColor: red
  },
  warning: {
    backgroundColor: yellow
  }
});

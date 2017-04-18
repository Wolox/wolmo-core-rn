import { StyleSheet } from 'react-native';

import { red, yellow, blue, transparent } from '../styles/colors';

const themes = { error: red, warning: yellow, notice: blue };

export function configColors({ error, warning, notice }) {
  themes.error = error || themes.error;
  themes.warning = warning || themes.warning;
  themes.notice = notice || themes.notice;
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
    backgroundColor: themes.notice,
    borderRadius: 20,
    marginHorizontal: 20,
    overflow: 'hidden',
    paddingVertical: 5,
    paddingHorizontal: 15
  },
  error: {
    backgroundColor: themes.error
  },
  warning: {
    backgroundColor: themes.warning
  }
});

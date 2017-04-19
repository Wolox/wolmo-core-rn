import { connect } from 'react-redux';

import WMOToast from './WMOToast';

const mapStateToProps = store => ({
  message: store.toast.message,
  error: store.toast.error,
  warning: store.toast.warning,
  duration: store.toast.duration
});

export default connect(mapStateToProps)(WMOToast);

import { connect } from 'react-redux';

import WMOToast from './WMOToast';

const mapStateToProps = store => store.toast;

export default connect(mapStateToProps)(WMOToast);

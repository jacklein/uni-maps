import React from 'react';
import { SCHOOL_SELECT, INFO } from './constants';
import { closeModal } from '../../actions'
import { connect } from 'react-redux';

import SchoolSelectModal from './SchoolSelectModal';
import InfoModal from './InfoModal';

const ModalConductor = props => {
  switch(props.modal) {
    case SCHOOL_SELECT:
      return <SchoolSelectModal {...props} />
    case INFO:
      return <InfoModal {...props} />
    default:
      return null;
  }
};

function mapStateToProps({ modal }) {
  return { modal };
}

export default connect(mapStateToProps, { closeModal })(ModalConductor);



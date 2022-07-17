import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {increaseByTwoCounter} from '../redux/actions/counterActions'
import {connect} from 'react-redux'


 class IncreaseByTwoCounter extends Component {
  render() {
    return (
      <div>increaseByTwoCounter</div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return {action:bindActionCreators(increaseByTwoCounter,dispatch)}
}


export default connect(mapDispatchToProps)(IncreaseByTwoCounter);

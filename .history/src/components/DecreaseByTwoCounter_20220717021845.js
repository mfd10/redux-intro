import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { decreaseByTwoCounter } from '../redux/actions/counterActions';

 class DecreaseByTwoCounter extends Component {
  render() {
    return (
      <div>
      <button onClick={e=>{
        this.props.dispatch(decreaseByTwoCounter())
      }}></button>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
    return {action:bindActionCreators(decreaseByTwoCounter,dispatch)}
}

export default connect(mapDispatchToProps)(DecreaseByTwoCounter);
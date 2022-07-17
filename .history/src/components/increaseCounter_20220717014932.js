import React, { Component,Button } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {increaseCounter} from '../redux/actions/counterActions'

 class IncreaseCounter extends Component {
  render() {
    return (
      <div>
          <Button onClick={e=>{
            this.props.dispatch(increaseCounter)
          }}></Button>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch){
  return {actions:bindActionCreators(increaseCounter,dispatch)}
}


export default connect(mapDispatchToProps)(increaseCounter);
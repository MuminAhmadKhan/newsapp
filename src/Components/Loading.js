import React, { Component } from 'react'
import loading from './22.gif'

export default class Loading extends Component {
  render() {
    return (
      <div className='my-1 text-center'>
          <img className='my-3 ' src={loading} alt='loading'/>
      </div>
    )
  }
}

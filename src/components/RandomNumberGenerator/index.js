// write your code here

import {Component} from 'react'
import './index.css'

export default class RandomNumberGenerator extends Component {
  state = {count: 0}

  generateRandomNum = () => {
    const number = Math.ceil(Math.random() * 100)
    this.setState({count: number})
  }

  render() {
    const {count} = this.state
    return (
      <div className="contain">
        <div className="card">
          <h1>RandomNumber</h1>
          <p>Generate a Random Number in the range 0 to 100</p>
          <button type="button" onClick={this.generateRandomNum}>
            Generate
          </button>
          <p className="countNum">{count}</p>
        </div>
      </div>
    )
  }
}

import React, {Component} from 'react'

export default class ClickityClick extends Component {
  constructor() {
    super()
    this.setState = {
      hasBeenClicked: false,
      count: 0
    }
  }

  handleClick = () => {
    this.setState(previousState => {
      return {
        hasBeenClicked: !previousState.hasBeenClicked,
        count: previousState.count +1
    })
  }

  render() {
    return(
      <div>
        <h1>{this.state.count}</h1>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    )
  }
}

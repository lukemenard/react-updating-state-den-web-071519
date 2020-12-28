import React, {component} from 'react'

export default class ClickityClick extends Component {
  constructor() {
    super()
    this.setState = {
      hasBeenClicked: false
    }
  }

  handleClick = () => {
    
  }

  render() {
    return(
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    )
  }
}
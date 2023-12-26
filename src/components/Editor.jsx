import React, { Component } from 'react'

export default class editor extends Component {

    handleChange(e){
        this.setState({value: e.target.value});
    }

    constructor(props) {
        super(props);
       
        this.handleChange = this.handleChange.bind(this);

        this.state =
         { 
            value: ''
        };
    }

  render() {
    return (
      <>
              <div className="container">
                <div className="input">
                    <h3>Input</h3>
                    <textarea className="input-text" onChange={this.handleChange} defaultValue={this.state.value}/>
                </div>
                <div className="output">
                    <h3>Pro Note</h3>
                    <div className="output-text">{this.state.value}</div>
                </div>                
            </div>
      </>

      
    )
  }
}


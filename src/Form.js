import React, {Component} from 'react'
import {FormControl, FormGroup, Button} from 'react-bootstrap'


class Bookform extends Component{

  render(){
    return (
      <div className="container">
      <h2>Add book</h2>
      <div className="row">
      <div className="col-xs-3"></div>
      <div  className="col-xs-6">
      <form>
        <FormGroup>
          <FormControl
            type="text"
            placeholder="Enter author"
          />
          <br/>
          <FormControl
            type="text"
            placeholder="Enter title"
          />
        </FormGroup>
        <Button bsStyle="primary">Add book</Button>
      </form>
      </div>
      <div className="col-xs-3"></div>
      </div>
      </div>
    )
  }
}

export default Bookform

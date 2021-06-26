import React, { Component } from 'react';
import { Form } from 'react-bootstrap';


class Addwork extends Component {  
    render() {
    return (
        <div className="container-fluid mt-5">
        <div className="row">
            <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '500px' }}>
              <div className="content mr-auto ml-auto">
                <p>&nbsp;</p>
                  <Form onSubmit={(event) => {
                    event.preventDefault()
                    const title = this.title.value
                    const price = this.price.value
                    const content = this.content.value
                    this.props.addWork(price, title, content)
                  }}>
                  <center>
                  <h1>Post your Literary Work</h1>
                  <br></br>
                  <div class="form-container">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control
                        id="title"
                        type="text"
                        ref={(input) => { this.title = input }}
                        className="form-control"
                        placeholder="Title of your work"
                        required />
                    </Form.Group>
                    <br/>   
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control
                        id="price"
                        type="text"
                        ref={(input) => { this.price = input }}
                        className="form-control"
                        placeholder="Expected price (MATIC)"
                        required />
                    </Form.Group>
                    <br/> 
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <h4>Enter your literary work</h4>
                        <Form.Control 
                        as="textarea" 
                        rows={6}
                        id="content"
                        ref={(input) => { this.content = input }}
                        required />
                    </Form.Group>   
                    <br/>              
                  </div>
                  <br/>
                  <button type="submit" className="btn btn-outline-primary">Add your Work</button>
                  </center>
                </Form>
                <br/><br/><br/><br/>
              </div>
            </main>
          </div>
        </div>
      );
    }
  }
  
  export default Addwork;
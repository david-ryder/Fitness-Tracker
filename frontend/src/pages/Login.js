import { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';



class Login extends Component {

      state = {
            username: '',
            password: '',
      };

      handleUsername = (event) => {
            this.setState({username: event.target.value})
      }

      handlePassword = (event) => {
            this.setState({password: event.target.value})
      }

      render() {
            return (
                  <div className='content'>
                        <h1>Login</h1>
                        <Form className='form'>

                              <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" placeholder="Username" onChange={this.handleUsername}/>
                              </Form.Group>

                              <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" onChange={this.handlePassword}/>
                              </Form.Group>

                              {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                              </Form.Group> */}

                              <div className='flex-container'>
                                    <Link to={"/userpage"} className='flex-item'>
                                          <Button variant="primary" type="submit" className='flex-item'>
                                                Login
                                          </Button>
                                    </Link>
                                          
                                    <Link to={"/userpage"} className='flex-item'>
                                          <Button variant="primary" type="submit" className='flex-item'>
                                                Register 
                                          </Button>
                                    </Link>

                              </div>
                        </Form>
                  </div>
            )
      }
}

export default Login;
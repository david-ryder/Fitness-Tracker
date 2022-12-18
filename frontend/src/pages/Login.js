import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Login() {
  return (
      <div className='content'>
            <Form className='form'>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Username" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                  </Form.Group>

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
    
  );
}

export default Login;
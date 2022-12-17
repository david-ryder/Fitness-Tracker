import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function Login() {
  return (
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
            <Link to={"/userpage"}>
                  <Button variant="primary" type="submit">
                        Login<Link to={"/userpage"} />
                  </Button>
            </Link>
                  

            
            
            <Link to={"/userpage"} className="flex-item">
                  <Button variant="primary" type="submit">
                        Register 
                  </Button>
            </Link>
            
      </div>
    </Form>
  );
}

export default Login;
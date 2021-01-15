import './App.css';

import { Button, Form, FormGroup, Label, Input }
  from 'reactstrap';
import { FacebookLoginButton } from 'react-social-login-buttons'

function App() {
  return (
    <body style={{ backgroundImage:"url(/white-marble-2048.jpg)" }}>
    <Form className="login-form">
      <h1> Subscribtion Form </h1>
      <h2 className="text-center">Welcome</h2>
      <FormGroup>
        <Label>Email</Label>
        <Input type="email" placeholder="Email"/>
      </FormGroup> 
      <FormGroup>
        <Label>Password</Label>
        <Input type="password" placeholder="Password"/>
      </FormGroup> 
      <Button className="btn-lg btn-dark btn-block">Log In</Button>
      <div className="text-center pt-3">
        Or continue with you social account:
      </div>
      <FacebookLoginButton className="mt-3 mb-3"/>
      <div className="text-center">
        <a href="/sign-up">Sign Up</a>
        <span className="p-1">|</span>
        <a href="/forgot-password">Forgot Password</a>
      </div>
    </Form>
    </body>
  );
}

export default App;
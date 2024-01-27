import React from 'react';
import './styles.css'; 



const Login = () => {
  return (
    
    <div className="container1">
      <p className='signuplogin'>Login</p>
      <form>
        <div className="form-group">
          
          <input type="email" className="form-control" placeholder="Enter email" />
        </div>
        <div className="form-group">
         
          <input type="password" className="form-control" placeholder="Enter password" />
        </div>
        <button type="submit" className="btn btn-primary">Log In</button>
        <p className='navigation'>Don't have an account? <a href="./signup" className='anchor'>SignUp</a></p>
      </form>
    </div>
  
  );
};

export default Login;

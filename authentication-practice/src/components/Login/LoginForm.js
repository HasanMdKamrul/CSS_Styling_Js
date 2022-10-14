import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../../firebase/firebase.init';

const auth = getAuth(app)

const LoginForm = () => {

    const [success,setSuccess] = useState(false)
    const [userInfo, setUserInfo] = useState();
    const [error,setError] = useState("");
    const [email,setEmail] = useState("");

    const handleSubmit = (event)=>{
        event.preventDefault();

        setError('');

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInWithEmailAndPassword(auth,email,password)
        .then((result)=>{
            const loggedInUser = result.user;
            console.log(loggedInUser);
           setUserInfo(loggedInUser.displayName);
           setSuccess(true)

        }).catch((error)=>{
            console.error('error',error);
            setError(error.message);
        })

    }


    const handleSignOut = ()=>{
        signOut(auth)
        .then(()=> alert('User signedOut'))
        .catch((error)=> console.log(error));

    };

    const emailHandle = (event)=>{
        const email = event.target.value;

        

        setEmail(email)
    }

    const resetEmail = ()=>{
        if (!email) {
            alert('Please sent an email');
            return
        }
        sendPasswordResetEmail(auth,email)
        .then(()=> alert("Pass reset email has been sent"))
        .catch((error)=> setError(error))
    }

    return (
        <div className='container mx-auto'>
              <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
          onBlur={emailHandle}
          name='email'
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
       
          
         
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
          name='password'
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <p>Don't have an account ? <Link to='/register'>Register</Link> </p>
        
      </form>
      <button onClick={handleSignOut} type="button" className="btn btn-primary">
          SignOut
        </button>
      <button onClick={resetEmail} type="button" className="btn btn-primary">
          Reset
        </button>
        <p>
            {
                success && <p>Successfully loggedIn</p>
            }
            {
                userInfo && <p>{userInfo}</p>
            }
            {
                error && <p>{error}</p>
            }
        </p>
        </div>
    );
};

export default LoginForm;
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from 'firebase/auth';
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import app from "../../firebase/firebase.init";

const auth = getAuth(app);

const Registration = () => {

    
    const [success,setSuccess] = useState(false);
    const [error,setError] = useState("");


    const handleSubmit = event=>{
        event.preventDefault();

       const form = event.target;
       const email = form.email.value;
       const password = form.password.value;
       const name = form.name.value;

    //    ** password validation

    if (!/(?=.*?[A-Z])/.test(password)) {
        setError('At least one upper case');
        return;
    }
    if (password.length < 6) {
        setError('At least 6 charecter');
        return;
    }
    if (!/(?=.*?[a-z])/.test(password)) {
        setError('At least one lower case');
        return;
    }
    if (!/(?=.*?[0-9])/.test(password)) {
        setError('At least one digit ');
        return;
    }
    if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
        setError('At least one Special charecter ');
        return;
    }


       createUserWithEmailAndPassword(auth,email,password)
       .then((result)=>{
        console.log(result.user);
        console.log('user created');
        setSuccess(true);
        // ** verify email
        emailVeify();
        // ** update user info
        updateName(name);


       })
       .catch((error)=> {
        console.error(error);
        setError(`Error is:${error.message} `);
       })
      
    };

    const updateName = (name)=>{
        updateProfile(auth.currentUser,{
            displayName: name
        }).then(()=> console.log('Profile updated'))
    }

    const emailVeify = ()=>{
        sendEmailVerification(auth.currentUser)
        .then(()=>{
            alert('Verification email send')
        })
    }
    

  return (
    <div className="w-50 mx-auto container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
          name='email'
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
          <label htmlFor="exampleInputName" className="form-label">
           Name
          </label>
          <input
          name='name'
            type="text"
            className="form-control"
            id="exampleInputName"
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
          Submit
        </button>
        <p>Already have an account ? <Link to='/login'>Login</Link> </p>
        <p>
            {
                success && <p>User created successfull</p>
            }
        </p>
        <p>
            {
                error && <p>Error: {error}</p>
            }
        </p>
      </form>
    </div>
  );
};

export default Registration;

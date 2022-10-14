import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useState } from 'react';
import './App.css';
import app from './firebase/firebase.init';


const auth = getAuth(app)

function App() {
  const googleProvider = new GoogleAuthProvider();
  const gitHubprovider = new GithubAuthProvider();
  const FacebookProvider = new FacebookAuthProvider();

  const [user,setUser] = useState({});
  const [message,setMessage]= useState("")

  const handleSignIn = ()=>{
    const signIn = async ()=>{
      try {
        const result = await signInWithPopup(auth,googleProvider);
        console.log(result.user);
        setUser(result.user);
      } catch (error) {
        console.log(error)
      }
    };
    signIn()
  };

  const handleSignInGit = ()=>{
    const signIn = async ()=>{
      try {
        const result = await signInWithPopup(auth,gitHubprovider);
        console.log(result.user);
        setUser(result.user);
      } catch (error) {
        console.log(error);
        
      }
    };
    signIn()
  }



  const handleSignOut = ()=>{
    signOut(auth)
    .then(()=> {
      setMessage("SignOut")
      setUser({})
    })
    .catch((error)=> {
      console.log(error);
      setUser({})
    })
  }

  const handleSignInFb = ()=>{
    
    const signInFb = async ()=>{
      try {
        
        const result = await signInWithPopup(auth,FacebookProvider);
        setUser(result.user)

      } catch (error) {
        console.log(error);
       
      }
    };

    signInFb()

  }

  const {uid,photoURL,displayName,email} = user;

  console.log(user)

  return (
    <div className="App">
     
     {
      uid ? <div>
        <h1>{displayName}</h1>
        <img src={photoURL} alt="" />
        <p>{email}</p>
        <button onClick={handleSignOut}>SignOut</button>
        
      </div> : <div>
      <button onClick={handleSignIn}>SignIn</button>
      <button onClick={handleSignInGit}>SignInGit</button>
      <button onClick={handleSignInFb}>SignInFb</button>
      {
        message && <p>{message}</p>
      }
      </div>
     }
    </div>
  );
}

export default App;

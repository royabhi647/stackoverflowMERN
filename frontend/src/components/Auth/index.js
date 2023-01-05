import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../../firebase";
import "./index.css";


function Index() {
  const [register, setRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
 
  const navigate = useNavigate();   // useHistory()

  const handleSignInGoogle = () => {
    signInWithPopup(auth,provider).then((res)=>{
      navigate('/')  // useHistory -> history.push('/)
      console.log(res);
    })
  }


  const handleRegister = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    if(email === "" || password === "" || username === ""){
      setError("Required field is missing");
      setLoading(false);
    }else{
      createUserWithEmailAndPassword(auth, email, password).then((res)=>{
        setLoading(false);
        navigate('/')
        console.log(res);
      }).catch((error)=>{
        console.log(error);
        setError(error.message);
        setLoading(false);
      })
    }
  }


  const handleSignIn = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    if(email === "" || password === ""){
      setError('Required field is missing');
      setLoading(false);
    }else{
      signInWithEmailAndPassword(auth, email, password).then((res)=>{
        console.log(res);
        setLoading(false);
        navigate('/')
      }).catch((error)=>{
        console.log(error.code);
        setError(error.message);
        setLoading(false);
      })
    }
  }


  return (
    <div className="auth">
      <div className="auth-container">
        <p>Add another way to log in using any of the following services.</p>
        <div className="sign-options">
          <div onClick={handleSignInGoogle} className="single-option">
            <img
              src="data:image/png;base64,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"
              alt="google"
            />
            <p>Login with Google</p>
          </div>
        </div>
        <div className="auth-login">
          <div className="auth-login-container">
            {register ? (
              <>
                <div className="input-field">
                  <p>Username</p>
                  <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" />
                </div>
                <div className="input-field">
                  <p>Email</p>
                  <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" />
                </div>
                <div className="input-field">
                  <p>Password</p>
                  <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" />
                </div>
                <button 
                  onClick={handleRegister} 
                  // disabled={loading}
                  style={{marginTop:"10px"}}
                >
                  {loading ? "Registering..." : "Register"}
                </button>
              </>
            ) : (
              <>
                <div className="input-field">
                  <p>Email</p>
                  <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" />
                </div>
                <div className="input-field">
                  <p>Password</p>
                  <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" />
                </div>
                <button 
                  onClick={handleSignIn} 
                  // disabled={loading}
                  style={{marginTop:"10px"}}
                >{loading ? "Signing In..." : "Login"}
                </button>
              </>
            )}
            <p 
                onClick={() => setRegister(!register)}
                style={{
                    marginTop:"10px",
                    textAlign:"center",
                    color:"#0095ff",
                    textDecoration:"underline",
                    cursor:"pointer"
                    }}
            >
                {register ? "Login" : "Register"}?
            </p>
          </div>
        </div>
        {
          error !== "" && (
            <p style={{color:"red",fontSize:"14px",}}>{error}</p>
          )
        }
      </div>
    </div>
  );
}

export default Index;

import React,{useState} from "react";
import { Link,useNavigate} from "react-router-dom";
import M from 'materialize-css'


function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const postdata=()=>{
    fetch('/signup',{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,
        email,
        password
      })
    }).then(res =>res.json()).then(data=>{
      if(data.error){
        M.toast({html: data.error,classes:"#c62828 red darken-3"})
      }else{  
        M.toast({html: data.message,classes:"#43a047 green darken-1"})
      navigate('/login')
      }
    })
  }
  return (
    <div className="mycard">
      <div className="card auth-card input-field">
        <h2
          className="brand-logo"
          style={{ marginBottom: "70px", fontSize: "55px" }}
        >
         L-E-A-F
        </h2>
        <input
          style={{ marginBottom: "30px" }}
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          style={{ marginBottom: "30px" }}
          type="text"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          style={{ marginBottom: "30px" }}
          type="text"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          style={{ marginBottom: "50px", marginTop: "30px" }}
          className="btn waves-effect waves-light #7b1fa2 purple darken-2"
        onClick={()=>postdata()}
        >
          Signup
        </button>
    <p>already have an account?<Link to='/login' className="link" style={{color:"blue"}}>Login</Link></p>
      </div>
    </div>
  );
}

export default Signup;

import React from 'react'
import {Link} from 'react-router-dom'
function Login() {
  return (
  <div className="mycard">
    <div className="card auth-card input-field">
<h2 className='brand-logo' style={{marginBottom:"70px",fontSize:"55px"}}>L-E-A-F</h2>

<input
style={{marginBottom:"30px"}}
type="text"
placeholder="email"
/>
<input
style={{marginBottom:"30px"}}
type="text"
placeholder="password"
/>
<button style={{marginBottom:"50px",marginTop:"30px"}} className="btn waves-effect waves-light #7b1fa2 purple darken-2">login

  </button>
<p>New to <span>L-E-A-F</span>?<Link to ='/signup'className='link'>SignUp</Link></p>

    </div>
  </div>
  )
}

export default Login
import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
// add_to_queue
    <nav>
    <div class="nav-wrapper white">
  <Link to="/" class="brand-logo  left">L-E-A-F</Link>
      <ul id="nav-mobile" class="right ">
    <li><i class="material-icons" style={{color:'black'}} >add_to_queue</i></li>
        <li><Link to="/login">Login</Link></li>
    <li><Link to="/signup">Signup</Link></li>
    <li><Link to="/profile" onClick={()=>{alert("Sorry, underconstruction")}}>Profile</Link></li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar
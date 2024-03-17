import React from 'react'
import {useNavigate} from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  return (<>
  <div style={{textAlign:"center",display:"flex",gap:"20px",justifyContent:"center",alignItems:"center"}}>

   <input style={{marginTop:"10px"}} className="input"placeholder="What Language You Looking for?"/>
   <a class="waves-effect waves-light button btn" onClick={()=>{
    setTimeout(()=>navigate('/createchannel'),800)
     }}  >create a channel</a>
  </div>
  </>
  )
}

export default Home
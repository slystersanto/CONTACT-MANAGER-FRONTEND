import React from 'react'
import spinnerimg from "../assests/loading.gif";

const Spinner = () => {
  return (
   
    <React.Fragment>


        <div>
            < img src={spinnerimg} alt="" className="d-block m-auto" style={{width:'200px'}} />
        </div>


    </React.Fragment>
  )
}

export default Spinner
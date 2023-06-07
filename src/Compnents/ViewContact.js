import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ViewContact = () => {
  const [contact, setContact] = useState({});
  const { contactId } = useParams();
  

  useEffect(()=>{
    const viewcontact= async ()=>{
      try {
        const view=await axios.get(`http://localhost:9000/user-view/${contactId}`)
        setContact(view.data);
        console.log(view)
    } catch (error) {
      console.log(error)
    }

     
    }
    viewcontact();
    
  },[contactId])

 

  return (
    <React.Fragment>
        <section className='view-contact-intro p-3'>
          <div className='container'>
            <div className='row'>
              <div className='col'>
                <p className='h3 text-warning fw-bold'>View Contact</p>
                <p className='fst-italic'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                           do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                           Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                           laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                           irure dolor in reprehenderit in voluptate velit esse</p>
              </div>
              
            </div>
            
          </div>
          
        </section>
        

        <section className='view-contact mt-3'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-md-4'>
                <img src={contact.photo} alt="image" className='contact-img'/>
              </div>
              <div className='col-md-8'>
              <ul className="list-group">
                              <li className="list-group-item list-group-item-action">
                                Name : <span className="fw-bold">{contact.name}</span>
                              </li>
                              <li className="list-group-item list-group-item-action">
                                Mobile : <span className="fw-bold">{contact.mobile}</span>
                              </li>
                              <li className="list-group-item list-group-item-action">
                                E-mail : <span className="fw-bold">{contact.email}</span>
                              </li>
                              <li className="list-group-item list-group-item-action">
                                Company : <span className="fw-bold">{contact.company}</span>
                              </li>
                              <li className="list-group-item list-group-item-action">
                                Title : <span className="fw-bold">{contact.title}</span>
                              </li>
                              
                            </ul>
              </div>
              
            </div>
            <div className='row'>
              <div className='col'>
                <Link to={"/contactlist"}className="btn btn-warning">Back</Link>
              </div>
              
            </div>
            
          </div>
        </section>
        
    </React.Fragment>
  )
}

export default ViewContact
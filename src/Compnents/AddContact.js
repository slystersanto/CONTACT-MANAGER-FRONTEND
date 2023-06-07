import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const AddContact = () => {
 const [id,setId]=useState('')
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:9000/user-create', {
       id,
       name,
        photo,
        mobile,
        email,
        company,
        title
      })
      console.log(response.data)
      navigate("/contactlist")
       
    } catch (error) {
      console.log(error)
    }
  }

 

  return (
    <React.Fragment>
      <section className='add-contact p-3'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <p className='h4 text-success fw-bold '>Create Contact</p>
              <p className='fst-italic'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse
              </p>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-4'>
              <form onSubmit={handleSubmit}>
              <div className='col-mb-2'>
                  <input type='text' className='form-control my-1' placeholder='Last 4 digit mob no' value={id} onChange={(e) => setId(e.target.value)} />
                </div>
              
                <div className='col-mb-2'>
                  <input type='text' className='form-control my-1' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='col-mb-2'>
                  <input type='text' className='form-control my-1' placeholder='Photo-url' value={photo} onChange={(e) => setPhoto(e.target.value)} />
                </div>
                <div className='col-mb-2'>
                  <input type='number' className='form-control my-1' placeholder='Mobile' value={mobile} onChange={(e) => setMobile(e.target.value)} />
                </div>
                <div className='col-mb-2'>
                  <input type='email' className='form-control my-1' placeholder='E-Mail' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='col-mb-2'>
                  <input type='text' className='form-control my-1' placeholder='Company' value={company} onChange={(e) => setCompany(e.target.value)} />
                </div>
                <div className='col-mb-2'>
                  <input type='text' className='form-control my-1' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className='col-mb-2'>
                  <input type='submit' className='btn btn-success my-1' value='Create' />
                  <Link to={'/contactlist'} className='btn btn-dark ms-2'>
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default AddContact

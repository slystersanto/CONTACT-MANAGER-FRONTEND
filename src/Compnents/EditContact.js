import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";

const EditContact = () => {

const { contactId } = useParams();
const navigate=useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      photo: "",
      mobile: "",
      email: "",
      company: "",
      title: "",
    },
    validate: (values) => {
      let error = {};

      if (values.name === "") {
        error.name = "Please enter name";
      }
      if (values.photourl === "") {
        error.name = "Please enter valid url";
      }
      if (values.mobile === "") {
        error.name = "Please enter valid mobile number";
      }
      if (values.email === "") {
        error.name = "Please enter valid email";
      }
      if (values.company === "") {
        error.name = "Please enter a company name";
      }
      if (values.title === "") {
        error.name = "Please enter a title";
      }

      return error;
    },
    onSubmit: async (values) => {
      try {
        const editput= axios.put(`https://contact-manager-backend-phlc.onrender.com/user-edit/${contactId}`,values,{
          headers:{
            Authorization:`${localStorage.getItem("token")}`
          },
        });
        navigate("/contactlist")

      } catch (error) {
        console.log(error)
      }
    },
  });

  useEffect(()=>{
    const editcontact= async ()=>{
      try {
        const view=await axios.get(`https://contact-manager-backend-phlc.onrender.com/user-edit/${contactId}`,{
          headers:{
            Authorization:`${window.localStorage.getItem("token")}`
          }
        });
      formik.setValues({
        name:view.data.name,
        photo:view.data.photo,
        mobile:view.data.mobile,
        email:view.data.email,
        company:view.data.company,
        title:view.data.title,
           
      });
      
       
    } catch (error) {
      console.log(error)
    }

     
    }
    editcontact();
    
  },[contactId])

  

  return (
    <React.Fragment>
      <section className="add-contact p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h4 text-primary fw-bold ">Edit Contact</p>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse
              </p>
            </div>
          </div>
          
          <div className="row align-items-center">
            <div className="col-md-4">
              <form onSubmit={formik.handleSubmit}>
                <div className="col-mb-2">
                  <input
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  name="name"
                    type="text"
                    className="form-control my-1"
                    placeholder="Name"
                  />
                </div>
                <div className="col-mb-2">
                  <input
                  onChange={formik.handleChange}
                  value={formik.values.photo}
                  name="photo"
                    type="text"
                    className="form-control my-1"
                    placeholder="Photo-url"
                  />
                </div>
                <div className="col-mb-2">
                  <input
                  onChange={formik.handleChange}
                  value={formik.values.mobile}
                  name="mobile"
                    type="number"
                    className="form-control my-1"
                    placeholder="Mobile"
                  />
                </div>
                <div className="col-mb-2">
                  <input
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  name="email"
                    type="email"
                    className="form-control my-1"
                    placeholder="Email"
                  />
                </div>
                <div className="col-mb-2">
                  <input
                  onChange={formik.handleChange}
                  value={formik.values.company}
                  name="company"
                    type="text"
                    className="form-control my-1"
                    placeholder="Company"
                  />
                </div>
                <div className="col-mb-2">
                  <input
                  onChange={formik.handleChange}
                  value={formik.values.title}
                  name="title"
                    type="text"
                    className="form-control my-1"
                    placeholder="Title"
                  />
                </div>
                <div className="col-mb-2">
                  <button type="submit" className="btn btn-primary my-1 me-2">
                    Update
                  </button>
                  <Link to="/contactlist" className="btn btn-secondary my-1">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default EditContact;

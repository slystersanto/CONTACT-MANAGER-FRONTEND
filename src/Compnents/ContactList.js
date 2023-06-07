import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Spinner from "../Compnents/Spinner";

const ContactList = () => {
  const [userList, setUserlist] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  let getUsers = async () => {
    const users = await axios.get("http://localhost:9000/users");
    setUserlist(users.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleDelete = async (contactid) => {
    try {
      setLoading(true);
      await axios.delete(`http://localhost:9000/user-delete/${contactid}`);
      const updatedUserList = userList.filter(user => user.id !== contactid);
      console.log(updatedUserList);
      setUserlist(updatedUserList);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  

  const filteredUsers = userList.filter((user) => {
    return (
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.mobile.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });





  return (
    <React.Fragment>
      <section className="contact-search p-3">
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col">
                <p className="h3 fw-bold">
                  Contact Manager
                  <Link to={"/addcontact"} className="btn btn-primary ms-2">
                    <i className="bx bx-plus-circle me-2" />
                    New
                  </Link>
                </p>
                <p className="fst-italic">
                  A contact manager is a software program that enables users
                  to easily store and find contact information, such as names,
                  addresses, and telephone numbers. They are contact-centric
                  databases that provide a fully integrated approach to tracking
                  all information and communication activities linked to
                  contacts.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <form className="row">
                  <div className="col">
                    <div className="mb-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search Names"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="mb-2">
                      <input
                        type="submit"
                        className="btn btn-outline-dark"
                        value="Search "
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {loading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          <section className="contact-list">
            <div className="container">
              <div className="row">
                {filteredUsers.map((user, index) => {
                  return (
                    <div className="col-md-6" key={index}>
                      <div className="card my-2">
                        <div className="card-body">
                          <div className="row align-items-center">
                            <div className="col-md-4">
                              <img
                                src={user.photo}
                                alt="image"
                                className="contact-img"
                              />
                            </div>
                            <div className="col-md-7">
                              <ul className="list-group">
                                <li className="list-group-item list-group-item-action">
                                  Name :{" "}
                                  <span className="fw-bold">{user.name}</span>
                                  </li>
                              <li className="list-group-item list-group-item-action">
                           Email :{" "}
                            <span className="fw-bold">{user.email}</span>
                            </li>
                          <li className="list-group-item list-group-item-action">
                            Mobile :{" "}
                            <span className="fw-bold">{user.mobile}</span>
                             </li>
                            
                            </ul>
                          </div>
                          <div className="col-md-1 d-flex flex-column align-items-center">
                          <Link to={`/viewcontact/${user.id}`} className="btn btn-warning my-1">
                            <i class="fa-solid fa-eye"></i>
                          </Link>
                          <Link className="btn btn-primary my-1" to={`/editcontact/${user.id}`}>
                            <i class='fa fa-pen'></i>
                          </Link>
                          <Link className="btn btn-danger my-1" onClick={() => handleDelete(user.id)}>
                            <i class="fa-solid fa-trash"></i>
                          </Link>
                        </div>
                              </div>
                               </div>
                               </div>
                               </div>
                               );
                              })}
                           </div>
                           </div>
                           </section>
                    </React.Fragment>
                          )}
                   </React.Fragment>
                         );
                           };


export default ContactList;
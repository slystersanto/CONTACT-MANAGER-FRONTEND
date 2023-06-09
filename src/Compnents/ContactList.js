import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Spinner from "../Compnents/Spinner";

const ContactList = () => {
  const [userList, setUserlist] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  let getUsers = async () => {
    try {
      const response = await axios.get("https://contact-manager-backend-phlc.onrender.com/users", {
        headers: {
          Authorization: `${window.localStorage.getItem("token")}`
        }
      });
      setUserlist(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleDelete = async (contactid) => {
    try {
      setLoading(true);
      await axios.delete(`https://contact-manager-backend-phlc.onrender.com/user-delete/${contactid}`, {
        headers: {
          Authorization: `${window.localStorage.getItem("token")}`
        }
      });
      const updatedUserList = userList.filter(user => user.id !== contactid);
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
        {/* ... */}
      </section>
      {loading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          <section className="contact-list">
            {/* ... */}
          </section>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default ContactList;

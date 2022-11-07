import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Update = (props) => {
  const { id } = useParams();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/people/${id}`)
      .then((res) => {
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const updatePerson = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/people/${id}`, {
        firstName,
        lastName,
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Update a Person</h1>
      <form onSubmit={updatePerson}>
        <p>
          <label>First Name</label>
          <br />
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </p>
        <p>
          <label>Last Name</label>
          <br />
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </p>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Update;

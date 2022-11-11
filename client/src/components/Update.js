import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import PersonForm from "./PersonForm";

const Update = () => {
  const { id } = useParams();
  const [person, setPerson] = useState({});
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/people/${id}`)
      .then((res) => {
        setPerson(res.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const updatePerson = (personParam) => {
    axios
      .put(`http://localhost:8000/api/people/${id}`, personParam)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Update a Person</h1>
      {loaded && (
        <PersonForm
          onSubmitProp={updatePerson}
          initialFirstName={person.firstName}
          initialLastName={person.lastName}
        />
      )}
    </div>
  );
};

export default Update;

import React, { useState, useEffect } from "react";
import PersonForm from "../components/PersonForm";
import PersonList from "../components/PersonList";
import axios from "axios";

const Main = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/people")
      .then((res) => {
        setPeople(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setPeople]);

  const createPerson = (personParam) => {
    axios
      .post("http://localhost:8000/api/people", personParam)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setPeople([...people, res.data]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <PersonForm
        onSubmitProp={createPerson}
        initalFirstName=""
        initalLastName=""
      />
      <hr />
      <PersonList people={people} setPeople={setPeople} />
    </div>
  );
};

export default Main;

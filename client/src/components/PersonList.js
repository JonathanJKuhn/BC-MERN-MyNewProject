import React from "react";
import { Link } from "react-router-dom";
import DeleteButton from "./DeleteButton";

const PersonList = (props) => {
  const { people, setPeople } = props;

  const removeFromDom = (personId) => {
    setPeople(people.filter((person) => person._id !== personId));
  };

  return (
    <div>
      {people.map((person, index) => {
        return (
          <div key={index}>
            <p>{person.firstName}</p>
            <p>{person.lastName}</p>
            <Link to={`/people/${person._id}`}>{person.firstName}'s Page!</Link>
            <span> | </span>
            <Link to={`/people/edit/${person._id}`}>Edit</Link>
            <span> | </span>
            <DeleteButton
              personId={person._id}
              successCallback={() => removeFromDom(person._id)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PersonList;

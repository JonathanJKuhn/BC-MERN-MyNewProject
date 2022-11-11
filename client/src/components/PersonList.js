import React from "react";
import { Link } from "react-router-dom";

const PersonList = (props) => {
  const { deletePerson, people } = props;

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
            <button
              onClick={(e) => {
                deletePerson(person._id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default PersonList;

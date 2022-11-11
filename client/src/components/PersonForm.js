import React, { useState } from "react";

const PersonForm = (props) => {
  const { onSubmitProp, initialFirstName, initialLastName } = props;
  const [firstName, setFirstName] = useState(initialFirstName);
  const [lastName, setLastName] = useState(initialLastName);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitProp({ firstName, lastName });
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label>First Name</label>
        <br />
        <input
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
      </p>
      <p>
        <label>Last Name</label>
        <br />
        <input
          type="text"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
      </p>
      <input type="submit" />
    </form>
  );
};

export default PersonForm;

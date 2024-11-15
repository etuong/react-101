// Example of manipulating DOM directly instead of using useRef
// This example is paired with useRefExample

import React from "react";

const NonRefExample = () => {
  const handleSubmit = () => {
    const nameField = document.getElementById("name");

    if (nameField) {
      const name = nameField.value;
      if (name) {
        alert(name);
        nameField.value = "";
      }
    }
  };

  return (
    <section>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <label>Blog Name</label>
        <br />
        <input type="text" id="name" placeholder="Name of your blog.." />

        <input type="submit" value="Submit" />
      </form>
    </section>
  );
};

export default NonRefExample;

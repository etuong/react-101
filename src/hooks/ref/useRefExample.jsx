// The useRef Hook allows you to persist values between renders.
// It can be used to store a mutable value that does not cause a re-render when updated.
// This example is paired with useRefExample

import React from "react";
import { useRef } from "react";

const RefExample = () => {
  const nameRef = useRef(null);

  const handleSubmit = () => {
    const nameField = nameRef.current;

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
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
      >
        <label>Blog Name</label>
        <br />
        <input type="text" ref={nameRef} placeholder="Name of your blog.." />

        <input type="submit" value="Submit" />
      </form>
    </section>
  );
};

export default RefExample;

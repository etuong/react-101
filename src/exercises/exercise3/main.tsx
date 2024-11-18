import { useState } from "react";
import Blog from "./blog/Blog";
import FooterComponent from "./footer/FooterComponent";
import FormComponent from "./form/FormComponent";
import "./main.scss";
import React from "react";

const BlogApp = () => {
  const [blogs, setBlogs] = useState<Blog[]>([
    { name: "Blog 1", content: "This is a very long text" },
    { name: "Blog 2", content: "Amazing! 10 out of 10" },
  ]);
  const [active, setActive] = useState<number>();

  const handleBlogCreation = (
    nameField: HTMLInputElement | null,
    contentField: HTMLTextAreaElement | null
  ) => {
    if (nameField && contentField) {
      const name = nameField.value;
      const content = contentField.value;
      if (name && content) {
        const newBlog: Blog = { name, content };
        setBlogs([...blogs, newBlog]);
        nameField.value = "";
        contentField.value = "";
      }
    }
  };

  const handleDelete = () => {
    const copy = [...blogs];
    copy.splice(active!, 1);
    setBlogs(copy);
  };

  return (
    <section className="container">
      <FormComponent handleSubmit={handleBlogCreation} />

      <div className="App">
        <ul>
          {blogs.map((blog, index) => {
            return (
              <li
                key={index}
                className={`blog-list-item ${active === index ? "active" : ""}`}
                onClick={() => {
                  setActive(index);
                }}
              >
                <p>{blog.name}</p>
                <p>{blog.content}</p>
              </li>
            );
          })}
        </ul>
      </div>

      {blogs[active!] && (
        <button
          className="deleteBtn"
          onClick={(e) => handleDelete()}
        >{`Delete ${blogs[active!]?.name}`}</button>
      )}

      <FooterComponent />
    </section>
  );
};

export default BlogApp;

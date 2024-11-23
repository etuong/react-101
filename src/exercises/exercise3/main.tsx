import { useState } from "react";
import Blog from "./blog/Blog";
import FooterComponent from "./footer/FooterComponent";
import FormComponent from "./form/FormComponent";
import "./main.scss";
import React from "react";

const BlogApp = () => {
  const [blogList, setBlogList] = useState<Blog[]>([
    { name: "Blog 1", content: "This is a very long text" },
    { name: "Blog 2", content: "Amazing! 10 out of 10" },
  ]);
  const [activeBlog, setActiveBlog] = useState<number | undefined>();

  const handleBlogCreation = (
    nameField: HTMLInputElement | null,
    contentField: HTMLTextAreaElement | null
  ) => {
    if (nameField && contentField) {
      const name = nameField.value;
      const content = contentField.value;
      if (name && content) {
        const newBlog: Blog = { name, content };
        setBlogList([...blogList, newBlog]);
        nameField.value = "";
        contentField.value = "";
      }
    }
  };

  const handleDelete = () => {
    if (activeBlog === undefined) return;
    const copy = [...blogList];
    copy.splice(activeBlog, 1);
    setBlogList(copy);
    setActiveBlog(undefined);
  };

  return (
    <section className="container">
      <FormComponent handleSubmit={handleBlogCreation} />

      <div className="App">
        <ul>
          {blogList.map((blog, index) => {
            return (
              <li
                key={index}
                className={`blog-list-item ${activeBlog === index ? "active" : ""}`}
                onClick={() => setActiveBlog(index)}
              >
                <p>{blog.name}</p>
                <p>{blog.content}</p>
              </li>
            );
          })}
        </ul>
      </div>

      {activeBlog !== undefined && (
        <button
          className="deleteBtn"
          onClick={handleDelete}
        >{`Delete ${blogList[activeBlog]?.name}`}</button>
      )}

      <FooterComponent />
    </section>
  );
};

export default BlogApp;

import React from "react";
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
import Banner from "../Banner/Banner"
import { AiOutlineDownload } from "react-icons/ai";

// import "./styles.css";
const ref = React.createRef();
const Blog = () => {
  return (
    <div>
      <Banner></Banner>

      <div>
        <div>
        <div className="md:w-[350px] border-b-4 border-lime-400 mx-auto rounded-b-2xl py-4 mt-28 flex flex-col">
          <h1 className="text-5xl text-center uppercase font-mono border border-b-8 border-lime-500 p-5">
            Blogs
          </h1>
          <Pdf targetRef={ref} filename="code-example.pdf">
          {({toPdf}) => <button className="btn bg-lime-500 border-lime-500 px-10 rounded-sm mt-1" onClick={toPdf}>PDF &nbsp;  <AiOutlineDownload className="text-xl"></AiOutlineDownload></button>}
          </Pdf>
        </div>
        </div>
      </div>
      <div className="py-20 w-2/3" ref={ref}>
        <div className="mb-5">
          <h3 className="text-4xl font-bold font-mono">
            Tell us the differences between uncontrolled and controlled
            components?
          </h3>
          <p className="mt-2 font-mono">
            <span className="font-bold">Ans:</span> Uncontrolled components in a
            system are those that maintain their own internal state, while
            controlled components have their state managed by a controlling
            entity outside of the component. In other words, uncontrolled
            components are self-contained and do not rely on external state
            management, while controlled components do rely on external state
            management.
          </p>
        </div>
        <div className="mb-5">
          <h3 className="text-4xl font-bold font-mono">
            How to validate React props using PropTypes?
          </h3>
          <p className="mt-2 font-mono">
            <span className="font-bold">Ans:</span> PropTypes is a library in
            React that allows developers to validate the props passed to a
            component. It is imported from the prop-types package and is defined
            using the propTypes property in the component.
          </p>
        </div>
        <div className="mb-5">
          <h3 className="text-4xl font-bold font-mono">
            Tell us the difference between nodejs and express js?
          </h3>
          <p className="mt-2 font-mono">
            {" "}
            <span className="font-bold">Ans:</span> Node.js is a runtime
            environment that allows you to run JavaScript code on the
            server-side, while Express.js is a framework built on top of Node.js
            that provides a set of tools and features for building web
            applications and APIs. In short, Node.js is the runtime, while
            Express.js is a tool built on top of it for easier web development.
          </p>
        </div>
        <div className="mb-5">
          <h3 className="text-4xl font-bold font-mono">
            What is a custom hook, and why will you create a custom hook?
          </h3>
          <p className="mt-2 font-mono">
            <span className="font-bold">Ans:</span> A custom hook is a function
            in React that allows you to reuse stateful logic across multiple
            components. Custom hooks are created by extracting stateful logic
            from a component into a reusable function.
          </p>
        </div>
      </div>
    </div>
  );
};



export default Blog;

import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export const Heading = () => {
  return (
    //<div>heading</div>

    <div className="heading">
      <div className="title">Todo App</div>
      <div className="btn-add-wrap">
        <Link to="/add" className="btn-add">
          Add User
        </Link>
      </div>
    </div>
  );
};

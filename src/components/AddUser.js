import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import "./AddUser.css";

export const AddUser = () => {
  const [name, setName] = useState("");
  const { addUser } = useContext(GlobalContext);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: uuid(),
      name,
      //level: String
      // id: 3,
      // name,
    };
    addUser(newUser);
    navigate("/");
  };

  const onChange = (e) => {
    setName(e.target.value);
  };

  return (
    //<div>add user</div>

    <form onSubmit={onSubmit}>
      <div className="addUser">
        <label className="name-add">Name: </label>
        <input
          type="text"
          value={name}
          onChange={onChange}
          name={name}
          placeholder="Enter user:"
          //required
        ></input>
      </div>
      <div className="btn-wrap">
        <button type="submit" className="submit-btn">
          Submit
        </button>
        <Link to="/" className="cancel-btn">
          Cancel
        </Link>
      </div>
    </form>
  );
};

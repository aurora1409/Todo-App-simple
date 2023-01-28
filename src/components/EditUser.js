import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link, useNavigate, useParams } from "react-router-dom";

export const EditUser = (props) => {
  const { editUser, users } = useContext(GlobalContext);
  const [selectedUser, setSelectedUser] = useState({
    id: "",
    name: "",
  });
  const navigate = useNavigate();
  // console.log(props);
  const { id: currentUserId } = useParams();
  //console.log(currentUserId);

  useEffect(() => {
    const userId = currentUserId;
    //console.log(userId);
    const selectedUser = users.find(
      (user) => user.id === userId
    ); /*Number(userId if id is num)*/
    //console.log(selectedUser);
    setSelectedUser(selectedUser);
  }, [currentUserId, users]);

  const onChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    editUser(selectedUser);
    navigate("/");
  };

  return (
    //<div>edit user</div>

    <form onSubmit={onSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={selectedUser.name}
          onChange={onChange}
          name="name"
          placeholder="Enter user"
          //required
        ></input>
      </div>
      <button type="submit">Edit Name</button>
      <Link to="/" className="">
        Cancel
      </Link>
    </form>
  );
};

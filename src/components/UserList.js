import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import "./Home.css";

export const UserList = () => {
  const { users, removeUser } = useContext(GlobalContext);
  console.log(users);

  return (
    //<div>user list</div>

    <div className="user-list">
      {users.length > 0 ? (
        <>
          {users.map((user) => (
            <div className="user-item" key={user.id}>
              <strong>{user.name}</strong>
              <div className="userList-wrap">
                <Link
                  to={`/edit/${user.id}`}
                  color="warning"
                  className="btn-userList"
                >
                  Edit
                </Link>
                <button
                  className="btn-delete"
                  onClick={() => removeUser(user.id)}
                  color="danger"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </>
      ) : (
        <h4 className="">No Users</h4>
      )}
    </div>
  );
};

import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handelDeleteUser = (_id) => {
    console.log(_id);
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("dele user successfully");
          const remaining = users.filter((user) => user._id !== _id);
          setUsers(remaining);
        } else {
          alert("the user cant delete");
        }
      });
  };

  return (
    <div>
      <h1>this is users</h1>
      <h2>Available user {users.length}</h2>
      {users.map((user) => (
        <p key={user._id}>
          {user.name} {user.email}
          <span style={{ textDecoration: "underline", color: "blue" }}>
            {user._id}
          </span>
          <Link to={`/update/${user._id}`}><button>Update</button></Link>
          <button onClick={() => handelDeleteUser(user._id)}>Delete </button>
        </p>
      ))}
    </div>
  );
};

export default Users;

import { useLoaderData } from "react-router-dom";

const Update = () => {
  const user = useLoaderData();

  const handelUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    console.log(name, email);
    const updatedUser = { name, email };

    fetch(`http://localhost:5000/users/${user._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("your user is updated");
          form.reset()
        }
      });
  };

  return (
    <div>
      <h1>{user.name}</h1>
      <form onSubmit={handelUpdate}>
        <input type="text" name="name" defaultValue={user?.name} />
        <br />
        <input type="email" name="email" defaultValue={user?.email} />
        <br />
        <input type="submit" value="Update your profile" />
      </form>
    </div>
  );
};

export default Update;

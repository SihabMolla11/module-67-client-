import "./App.css";

function App() {
  const handelAddUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    // console.log(user);

    fetch("http://localhost:5000/users", {
      method: "POST",
        headers:{
          "Content-Type" : "application/json"
        },
        body:JSON.stringify(user)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
          alert('new user added')
          form.reset()
        }
      });
  };

  return (
    <>
      <h1>Simple crud</h1>

      <form onSubmit={handelAddUser}>
        <input type="text" name="name" id="name" />
        <br />
        <input type="email" name="email" id="email" />
        <br />
        <input type="submit" value="add new user" />
      </form>
    </>
  );
}

export default App;

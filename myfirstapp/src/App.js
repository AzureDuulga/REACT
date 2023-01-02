import logo from "./logo.svg";
import "./App.css";

function App() {
  const user = [
    {
      name: "John",
      age: 15,
      ImageUrl:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGV8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    },
    {
      name: "Bold",
      age: 17,
      ImageUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGV8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    },
    {
      name: "Tumur",
      age: 18,
      ImageUrl:
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGV8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    },
    {
      name: "Khurel",
      age: 19,
      ImageUrl:
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGV8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    },
    {
      name: "Sukh",
      age: 20,
      ImageUrl:
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGV8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    },
  ];
  let sum = null;
  for (let i = 0; i < user.length; i++) {
    sum += user[i].age;
  }
  console.log(sum);
  let avgAge = sum / user.length;
  console.log(avgAge);
  return (
    <div className="App">
      <h1>Avarage age:{avgAge}</h1>
      <div class="frame">
        <div>
          <p>Name:{user[0].name}</p>
          <p>Age:{user[0].age}</p>
        </div>
        <div>
          <img class="zurag" src={user[0].ImageUrl} alt="Italian Trulli" />
        </div>
      </div>
      <div class="frame">
        <div>
          <p>Name:{user[1].name}</p>
          <p>Age:{user[1].age}</p>
        </div>
        <div>
          <img class="zurag" src={user[1].ImageUrl} alt="Italian Trulli" />
        </div>
      </div>
      <div class="frame">
        <div>
          <p>Name:{user[2].name}</p>
          <p>Age:{user[2].age}</p>
        </div>
        <div>
          <img class="zurag" src={user[2].ImageUrl} alt="Italian Trulli" />
        </div>
      </div>
      <div class="frame">
        <div>
          <p>Name:{user[3].name}</p>
          <p>Age:{user[3].age}</p>
        </div>
        <div>
          <img class="zurag" src={user[3].ImageUrl} alt="Italian Trulli" />
        </div>
      </div>
      <div class="frame">
        <div>
          <p>Name:{user[4].name}</p>
          <p>Age:{user[4].age}</p>
        </div>
        <div>
          <img class="zurag" src={user[4].ImageUrl} alt="Italian Trulli" />
        </div>
      </div>
    </div>
  );
}

export default App;

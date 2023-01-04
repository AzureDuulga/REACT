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
    {user.map((user) => (
      <UserCard name={user.name} age={user.age} ImageUrl={user.ImageUrl} />
    ))}
  </div>
);

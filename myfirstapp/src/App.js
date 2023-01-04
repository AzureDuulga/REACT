import logo from "./logo.svg";
import "./App.css";
import UserCard from "./components/card";
import NavBar from "./components/navbar";
import BlogPost from "./components/Blog";
import Body from "./components/body";

function App() {
  return (
    <div className="App">
      <NavBar />
      <BlogPost />
      <Body />
    </div>
  );
}

export default App;

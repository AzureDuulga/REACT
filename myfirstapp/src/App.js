import logo from "./logo.svg";
import "./App.css";
import UserCard from "./components/UserCard";
import NavBar from "./components/navbar";
import BlogPost from "./components/blog";
import { useSyncExternalStore } from "react";

function App() {
  return (
    <div className="App">
      <NavBar />
      <BlogPost />
    </div>
  );
}

export default App;

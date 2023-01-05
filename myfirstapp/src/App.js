import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/Content/Header";
import Body from "./components/Content";
import Footer from "./components/Content/Footer";

function App() {
  return (
    <div className="App width">
      <NavBar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;

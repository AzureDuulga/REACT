import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/Content/Header";
import Body from "./components/Content";
import Footer from "./components/Content/Footer";
import { Button } from "react-bootstrap";
import "./turshilt.scss";

function App() {
  return (
    <div className="App width">
      <NavBar />
      <Body />
      <Footer />
      <Button as="a" variant="primary">
        Button as link
      </Button>
      <Button as="a" variant="success">
        Button as link
      </Button>
    </div>
  );
}

export default App;

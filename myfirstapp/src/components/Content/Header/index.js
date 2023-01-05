import "./navbar.css";
import HeaderMenu from "./headerCatg";
const NavBar = () => {
  return (
    <nav className="flex">
      <div className="flex">
        <div>
          <p>sad zeppelins</p>
        </div>
        <div>
          <img src="/zurag/HireMe.png" alt="linkedin" />
        </div>
      </div>
      <div>
        <ul>
          <HeaderMenu />
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

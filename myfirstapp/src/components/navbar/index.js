import "./navbar.css";
const NavBar = () => {
  return (
    <nav>
      <div className="flex">
        <p>sad zeppelins</p>
        <div>
          <img src="/zurag/HireMe.png" alt="linkedin" />
        </div>
      </div>
      <div>
        <ul>
          <li>PROTFOLIO</li>
          <li>BLOG</li>
          <li>CV</li>
          <li>STORE</li>
          <li>FREELANCE</li>
          <li>ABOUT ME</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

let menu = [
  "All",
  "UI Design",
  "UX Design",
  "Product Design",
  "Articles",
  "Tutorials",
  "News",
];
const Menu = () => {
  return (
    <div className="flex">
      <ul id="ContentMenu">
        {menu.map((el) => {
          return <li className="hover">{el}</li>;
        })}
      </ul>
    </div>
  );
};

export default Menu;

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
      {menu.map((el) => {
        return <li className="hover">{el}</li>;
      })}
    </div>
  );
};

export default Menu;

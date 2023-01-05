let topCatg = [
  "PORTFOLIO",
  "BLOG",
  "CV",
  "STORE",
  "FREELANCE",
  "ABOUT ME",
  "CONTACT",
];
const HeaderMenu = () => {
  return (
    <>
      {topCatg.map((categ) => {
        return <li>{categ}</li>;
      })}
    </>
  );
};

export default HeaderMenu;

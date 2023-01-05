const Button = (props) => {
  return (
    <button id={props.id} className="socialMedia">
      <img className="logo" src={props.img} alt="twitter" />
      {props.name}
    </button>
  );
};

export default Button;

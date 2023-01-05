import "./card.css";

const cardData = [
  {
    img: "/zurag/Rectangle 124.png",
    date: "NOV 23 2020",
    title: "This way is wrong about UI Design.",
    description:
      "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web.",
    btn: "READ MORE",
  },
  {
    img: "/zurag/laptop.png",
    date: "NOV 23 2020",
    title: "This way is wrong about UI Design.",
    description:
      "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web.",
    btn: "READ MORE",
  },
  {
    img: "/zurag/Rectangle 124.png",
    date: "NOV 23 2020",
    title: "This way is wrong about UI Design.",
    description:
      "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web.",
    btn: "READ MORE",
  },
  {
    img: "/zurag/laptop.png",
    date: "NOV 23 2020",
    title: "This way is wrong about UI Design.",
    description:
      "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web.",
    btn: "READ MORE",
  },
  {
    img: "/zurag/Rectangle 124.png",
    date: "NOV 23 2020",
    title: "This way is wrong about UI Design.",
    description:
      "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web.",
    btn: "READ MORE",
  },
  {
    img: "/zurag/laptop.png",
    date: "NOV 23 2020",
    title: "This way is wrong about UI Design.",
    description:
      "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web.",
    btn: "READ MORE",
  },
  {
    img: "/zurag/Rectangle 124.png",
    date: "NOV 23 2020",
    title: "This way is wrong about UI Design.",
    description:
      "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web.",
    btn: "READ MORE",
  },
  {
    img: "/zurag/laptop.png",
    date: "NOV 23 2020",
    title: "This way is wrong about UI Design.",
    description:
      "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web.",
    btn: "READ MORE",
  },
];

const CardItem = (props) => {
  return (
    <div className="card-width margin">
      <img className="img-width" src={props.img} alt="zurag" />
      <p className="date">{props.date}</p>
      <h2 className="title">{props.title}</h2>
      <p>{props.description}</p>
      <btn className="btn">{props.btn}</btn>
    </div>
  );
};

const CardList = () => {
  return cardData.map((card) => {
    return (
      <CardItem
        img={card.img}
        date={card.date}
        title={card.title}
        description={card.description}
        btn={card.btn}
      />
    );
  });
};

export default CardList;

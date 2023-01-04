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
    <div>
      <img src={props.img} alt="zurag" />
      <p>{props.date}</p>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <h4>{props.btn}</h4>
    </div>
  );
};

const Card = () => {
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

export default Card;

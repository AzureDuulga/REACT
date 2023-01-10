import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardItem(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.user.profileImg} />
      <Card.Body>
        <Card.Title>{props.user.first}</Card.Title>
        <Card.Text>
          Email: {props.user.email} - Address: {props.user.address}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default CardItem;

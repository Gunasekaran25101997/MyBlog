import { Card } from "react-bootstrap";

const Post4 = () => {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={require("../images/Django.jpg")}
        width={50}
        height={100}
      />
      <Card.Body>
        <Card.Title>Django</Card.Title>
        <Card.Text>
          I have done a project in CRUD operations in Django using a
          function-based View.
        </Card.Text>
        {/* <a href="#django" className="btn btn-primary">Read More</a> */}
      </Card.Body>
    </Card>
  );
};

export default Post4;

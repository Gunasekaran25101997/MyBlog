import { Card } from "react-bootstrap";

const Post3 = () => {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={require("../images/Java-Logo.jpg")}
        width={50}
        height={100}
      />
      <Card.Body>
        <Card.Title>Java</Card.Title>
        <Card.Text>
          I have completed the Java course in Accord Infomatrix, and my Java
          Project is Bus Registration using Eclipse, which I connected with JDBC
          using MySQL.{" "}
        </Card.Text>
        {/* <a href="#java" className="btn btn-primary">Read More</a> */}
      </Card.Body>
    </Card>
  );
};

export default Post3;

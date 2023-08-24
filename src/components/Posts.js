import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import Post1 from "./Post1";
import Post2 from "./Post2";
import Post3 from "./Post3";
import Post4 from "./Post4";

const Posts = () => {
  return (
    <Container>
      <Card className="m-2">
        <Card.Body>
          <Card.Title>Guna</Card.Title>
          Welcome to my Blog. I am Gunasekaran from Chennai I Completed BE/EEE
          in St. Peter's engg clg. After my degree I worked in ICMR then I came
          to know about Java so I joined Accord info matrix and completed the
          course then joined Ciranta IT services I am worked in MS Excel. By doing
          Personal projects I am increasing my confidence level in web
          development. I completed frontend(HTML, CSS, JavaScript, and React)
          and in Backend (Core Java, Mysql). I am a quick learner. I like to handle challenges. I looking for
          opportunities to show my skills and talent.
        </Card.Body>
      </Card>
      <Row className="justify-content-between">
        {/* <Col md={4} className="mt-4 float-right"></Col> */}
        <Row className="m-2 p-1" style={{ width: "15rem" }}>
          <Post1 />
        </Row>
        <Row className="m-2 p-1" style={{ width: "15rem" }}>
          <Post2 />
        </Row>
        <Row className="m-2 p-1" style={{ width: "15rem" }}>
          <Post3 />
        </Row>
        <Row className="m-2 p-1" style={{ width: "15rem" }}>
          <Post4 />
        </Row>
      </Row>
    </Container>
  );
};
export default Posts;

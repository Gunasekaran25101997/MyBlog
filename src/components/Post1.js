

import { Card } from "react-bootstrap";

const Post1 = () => {
    return (
        <Card>
            <Card.Img
                variant="top"
                src={require('../images/bootstrap.jpg')}
                width={50}
                height={100}
            />
            <Card.Body>
                <Card.Title>HTML & CSS</Card.Title>
                <Card.Text>
                    I Have done HTML & CSS project as well as responsive projects using Bootstrap.
                    HTML & CSS Projects:
                        <li>My Resume</li>
                        <li>Spicy Hut</li>
                        <li>Login Registration</li>
                    Bootstrap:
                        <li>My Cars</li>
                </Card.Text>
                {/* <a href="#html&css" className="btn btn-primary">Read More</a> */}
            </Card.Body>
        </Card>
    )
}
 
export default Post1;

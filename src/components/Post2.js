
import { Card } from "react-bootstrap";
 
const Post2 = () => {
    return (
        <Card>
            <Card.Img
                variant="top"
                src={require('../images/React-icon.svg.jpg')}
                width={50}
                height={100}
            />
            <Card.Body>
                <Card.Title>React</Card.Title>
                <Card.Text>
                    My Personal projects in React:
                        <li>TODO List</li>
                        <li>Social Media</li>
                        <li>Registration</li>
                        <li>My Blog</li>
                </Card.Text>
                {/* <a href="#react" className="btn btn-primary">Read More</a> */}
            </Card.Body>
        </Card>
    );
};
 
export default Post2;
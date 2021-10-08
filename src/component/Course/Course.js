import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';


const Course = (props) => {
  const { name, price, image, course_Duration, id } = props.data
  const history = useHistory()
  const goToDet = (id) => {
    history.push(`/classes/${id}`)
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height="147.38px" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"> Course duration:{course_Duration}</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <h3>{price}</h3>
        <Button onClick={() => goToDet(id)} variant="primary">Enroll Now</Button>

      </Card.Body>
    </Card>
  );
};

export default Course;
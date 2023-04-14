import {Card, Button} from 'react-bootstrap';

export const BookCard = ({title, author, book_image}) => {
    return (
        <Card className="card" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={book_image} alt=""/>
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{author}</Card.Text>
            <Button variant="primary">Buy Now</Button>
            </Card.Body>
        </Card>
    )
}
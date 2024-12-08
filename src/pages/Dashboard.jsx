import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



export default function Dashboard() {
    const navigate = useNavigate()
    const logOut = () => {
        navigate("/")
    }

    return (
        <Container>
        <h1 className="my-3">Dashboard</h1>
        <Row>
            <Col md={4}>
            <Card>
                <Card.Body>
                    <Card.Title>Sigma School Analytics</Card.Title>
                    <Card.Text>People who graduate that get job: 80%</Card.Text>
                </Card.Body>
            </Card>
            </Col>
        </Row>
        <Button className="primary mt-3" onClick={logOut}>Log Out</Button>
        </Container>
    )
}
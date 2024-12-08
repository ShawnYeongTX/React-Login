import { Container, Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";


export default function Home () {
    const navigate = useNavigate()
    function proceedLogIn () {
            navigate("/login")
    }




    return (
        <Container>
            <h1 className = "my-3">Welcome Home !</h1>
            <Button className="primary mt-3" onClick={proceedLogIn}>Proceed To Log In</Button>
        </Container>

    )
}
import { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const authContext = useContext(AuthContext);

    function login() {
        const isCorrectUsername = username ==="haris@sigmaschool.co"
        const isCorrectPassword = password === "password"
        if(isCorrectUsername && isCorrectPassword) {
            authContext.setToken("1234")
            navigate("/dashboard");
        }
    }
    
    return(
        <Container>
            <h1 className="my-3">Login to your account</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" value ={username} onChange = {(e) => setUsername (e.target.value)} placeholder= "Type your email here"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value = {password} onChange={(e) => setPassword(e.target.value)}placeholder="Type your password here"/>
                    <Form.Text className="text-muted">We&apos;ll never share your credential with anyone else.</Form.Text>
                    <Form.Check type="checkbox" label="Remember my email" className="mt-3"/>
                </Form.Group>
                <Button variant="primary" onClick={login}>Login</Button>
            </Form>
        </Container>
    )
}
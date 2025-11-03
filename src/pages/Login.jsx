import Card from "../components/Card";
import Input from "../components/Input";

export default function Login(){
    return (
        <Card>
            <h2>Login</h2>
            <Input type="email" label="Email" placeholder="Insira seu email" />
        </Card>
    )
}
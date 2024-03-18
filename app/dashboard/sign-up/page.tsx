import Input from "@/components/account/Input";
import { AccountMenu } from "../../../components/account/AccountMenu";
import Button from "@/components/account/Button";
import Container from "@/components/account/Container";
import AccountLink from "@/components/account/AccountLink";
import signUp from "@/actions/signup";

export default function SignUp() {
    return (
        <Container>
            <AccountMenu action={signUp} title="Create Account" >
                <Input name="email" placeholder="Email" />
                <Input name="password" placeholder="Password" isPassword={true} />
                <Button title="Create Account" />
                <AccountLink title="Already have an account?" link="/dashboard/sign-in" linkTitle="Log In" />
            </AccountMenu>
        </Container>
    )
}
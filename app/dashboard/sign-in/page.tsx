import Input from "@/components/account/Input";
import { AccountMenu } from "../../../components/account/AccountMenu";
import Button from "@/components/account/Button";
import Container from "@/components/account/Container";
import AccountLink from "@/components/account/AccountLink";
import signIn from "@/actions/signIn";

export default function Signin() {
    return (
        <Container>
            <AccountMenu action={signIn} title="Sign In" >
                <Input name="email" placeholder="Email" />
                <Input name="password" placeholder="Password" isPassword={true} />
                <Button title="Sign In" />
                <AccountLink title="Don't have an account?" link="/dashboard/sign-up" linkTitle="Sign Up Now" />
            </AccountMenu>
        </Container>
    )
}
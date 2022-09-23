import { useAuth } from "../providers/authentication/AuthenticationProvider"
import LoginViewPage from "./login/LoginViewPage";

export default function Main() {

    const { authContext } = useAuth();

    if(authContext) return (
        <>Authenticated</>
    )

    return (
        <LoginViewPage/>
    )
}
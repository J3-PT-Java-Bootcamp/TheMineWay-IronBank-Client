import { useAuth } from "../providers/authentication/AuthenticationProvider"
import DashboardViewPage from "./dashboard/DashboardViewPage";
import LoginViewPage from "./login/LoginViewPage";

export default function Main() {

    const { authContext } = useAuth();

    if(authContext) return (
        <DashboardViewPage/>
    )

    return (
        <LoginViewPage/>
    )
}
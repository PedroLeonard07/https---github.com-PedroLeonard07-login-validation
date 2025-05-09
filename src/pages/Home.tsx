import { useNavigate } from "react-router-dom";
import { ButtonDefault } from "../components/ButtonDefault";
import { FormLayout } from "../components/FormLayout";

export function Home() {
    const user = localStorage.getItem('userLogged');
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('userLogged');
        localStorage.removeItem('auth');
        navigate('/');
    }

    return (
        <FormLayout>
            <div className="flex flex-col items-center">
                <p className="text-3xl mb-10">Bem vindo(a), {user}</p>
                <ButtonDefault value="Logout" onclick={handleLogout}/>
            </div>
        </FormLayout>
    )
}
import { ButtonDefault } from "../components/ButtonDefault";
import { FormLayout } from "../components/FormLayout";
import { InputDefault } from "../components/InputDefault";
import { Link } from 'react-router-dom';
import { useLogin } from "../hooks/useLogin";

export function Login() {
    const { handleLogin, email, setEmail, emailError, password, setPassword, passwordError } = useLogin();

    return (
        <FormLayout onSubmit={handleLogin}>
            <h1 className="text-4xl font-bold">Login</h1>
            <div className="w-full h-[50px]"></div>
            <InputDefault
                label="Email"
                placeholder="Digite seu email"
                type="email"
                value={email} 
                onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
                error={emailError}
                />
            <div className="w-full h-[10px]"></div>
            <InputDefault
                label='Senha'
                placeholder="Digite sua senha"
                type="password"
                value={password}
                onChange={(e) => setPassword((e.target as HTMLInputElement).value)}
                error={passwordError}
                />
            <div className="w-full h-[55px]"></div>
            <ButtonDefault value="Login"/>
            <span className="self-center mt-[15px]">Não possui conta? <Link to={'/register'} className="hover:underline">Cadastre-se</Link></span>
        </FormLayout>
    )
}
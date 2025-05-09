import { ButtonDefault } from "../components/ButtonDefault";
import { FormLayout } from "../components/FormLayout";
import { InputDefault } from "../components/InputDefault";
import { Link } from 'react-router-dom'
import { useRegister } from "../hooks/useRegister";

export function Register() {
    const {
        name, setName, nameError,
        email, setEmail, emailError,
        password, setPassword, passwordError,
        confPassword, setConfPassword, confPasswordError,
        handleRegister 
    } = useRegister();

    return (
        <FormLayout onSubmit={handleRegister}>
            <h1 className="text-4xl font-bold">Cadastre-se</h1>
            <div className="w-full h-[25px]"></div>
            <InputDefault 
            label="Nome"
            type="text"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName((e.target as HTMLInputElement).value)}
            error={nameError}
            />
            <div className="w-full h-[10px]"></div>
            <InputDefault
            label="Email"
            type="text"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
            error={emailError}
            />
            <div className="w-full h-[10px]"></div>
            <InputDefault
                label="Senha"
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword((e.target as HTMLInputElement).value)}
                error={passwordError}
            />
            <div className="w-full h-[10px]"></div>
            <InputDefault
                label="Confirme sua senha"
                type="password"
                placeholder="Confirme sua senha"
                value={confPassword}
                onChange={(e) => setConfPassword((e.target as HTMLInputElement).value)}
                error={confPasswordError}
            />
            <div className="w-full h-[30px]"></div>
            <ButtonDefault value="Cadastrar" />
            <span className="self-center mt-[5px]">Ja possui conta? <Link to={'/'} className="hover:underline">Login</Link></span>
        </FormLayout>
    )
}
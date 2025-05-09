import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface User {
    name: string;
    email: string;
    password: string;
}

export function useLogin() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [emailError, setEmailError] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('');
    const [users] = useState<User[]>(() => {
        const storedUsers = localStorage.getItem('users');
        return storedUsers ? JSON.parse(storedUsers) : [];
    })
    const verifEmail = users.find(u => u.email === email.trim())?.email || '';
    const verifPassword = users.find(u => u.password === password.trim())?.password || '';
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setEmailError('');
        setPasswordError('');
        let hasError = false;

        if (email.trim() === '') {
            setEmailError('Email obrigatório');
            hasError = true;
        }
        if (password.trim() === '') {
            setPasswordError('Senha obrigatória');
            hasError = true;
        }
        if (!hasError) {
            if (
              email.trim() === verifEmail &&
              password.trim() === verifPassword
            ) {
              localStorage.setItem('auth', 'true');
              const userName = users.find(u => u.email === email.trim())?.name
              localStorage.setItem('userLogged', JSON.stringify(userName));
              navigate('/home');                
            } else {
              setEmailError("Email ou senha incorreto");
            }
        }    
    }

    return {
        email, setEmail, emailError,
        password, setPassword, passwordError,
        handleLogin
    }
}
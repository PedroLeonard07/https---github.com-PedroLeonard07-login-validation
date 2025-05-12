import { useEffect, useState } from "react";

interface User {
    name: string;
    email: string;
    password: string;
}

export function useRegister() {
    const [name, setName] = useState<string>("");
    const [nameError, setNameError] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [emailError, setEmailError] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");
    const [confPassword, setConfPassword] = useState<string>("");
    const [confPasswordError, setConfPasswordError] = useState<string>("");
    const [users, setUsers] = useState<User[]>(() => {
        const storedUsers = localStorage.getItem('users');
        return storedUsers ? JSON.parse(storedUsers) : [];
    });

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users]);

    const handleRegister = (e: React.FormEvent) => {
      e.preventDefault();
      setNameError("");
      setEmailError("");
      setPasswordError("");
      setConfPasswordError("");
      let hasError = false;
      const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      const verifEmail =
        users.find((u) => u.email === email.trim())?.email || "";

      if (name.trim() === "") {
        setNameError("Nome obrigatório");
        hasError = true;
      }
      if (email.trim() === "") {
        setEmailError("Email obrigatório");
        hasError = true;
      }
      if (email.trim() !== "" && !regexEmail.test(email.trim())) {
        setEmailError("Email inválido");
        hasError = true;
      }
      if (email.trim() === verifEmail && email.trim() !== "") {
        setEmailError("Email ja cadastrado");
        hasError = true;
      }
      if (password.trim() === "") {
        setPasswordError("Senha obrigatória");
        hasError = true;
      }
      if (password.trim() !== "" && password.trim().length < 6) {
        setPasswordError("Senha precisa ter no mínimo 6 caracteres");
        hasError = true;
      }
      if (confPassword.trim() === "") {
        setConfPasswordError("Confirmação de senha obrigatória");
        hasError = true;
      }
      if (
        confPassword.trim() !== "" &&
        password.trim() !== confPassword.trim()
      ) {
        setConfPasswordError("Senhas não coincidem");
        hasError = true;
      }
      if (!hasError) {
        alert("Usuário cadastrado com sucesso!");
        const newUser = { name, email, password };
        setUsers((prev) => [...prev, newUser]);
        setName("");
        setEmail("");
        setPassword("");
        setConfPassword("");
      }
    };

    return {
        name, setName, nameError,
        email, setEmail, emailError,
        password, setPassword, passwordError,
        confPassword, setConfPassword, confPasswordError,
        users, handleRegister 
    }
}
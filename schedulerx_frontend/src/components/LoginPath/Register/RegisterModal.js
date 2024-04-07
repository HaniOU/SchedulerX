import { useEffect, useState } from "react";
import classes from "./RegisterModal.module.css"
function RegisterModal({onRegisterClose}){
    useEffect(() => {
        function escape(e) {
            if (e.code === "Escape") {
                onRegisterClose();
            }
        }
        document.addEventListener("keydown", escape);

        return function () {
            document.removeEventListener("keydown", escape);
        }
    }, [onRegisterClose]);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [err, setErr] = useState("")

    async function handleSubmit(event){
        event.preventDefault();
        if (password != password2) {
            setErr("Password confirmation failed.Please ensure that the password and confirmation password match")
         
            setPassword("");
            setPassword2("");
            return;
        }
        const newUser = {username: username, password: password}
        try {
            const response = await fetch("http://localhost:8080/auth/v1/registration", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newUser)
            });

            if (!response.ok) {
                const errorMessage = await response.text();
                throw new Error(errorMessage);
            }
            onRegisterClose();
        } catch (error) {
            setUsername("");
            setPassword("");
            setPassword2("");
            setErr(error.message)        }
    }
    return(
        <div className={classes.modal}>
            <button onClick={onRegisterClose} className={classes.close}>&times;</button>
            <h1 className={classes.title}>Registration</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e)=> setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password2">Password:</label>
                    <input
                        type="password"
                        id="password2"
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Confirm</button>
            </form>
            {err && <h2>{err}</h2>}
        </div>
    );
}
export default RegisterModal;
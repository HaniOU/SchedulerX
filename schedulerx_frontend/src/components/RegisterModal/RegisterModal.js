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

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event){
        event.preventDefault();
        alert("successful registration!")
        onRegisterClose();
    }
    return(
        <div className={classes.modal}>
            <button onClick={onRegisterClose} className={classes.close}>&times;</button>
            <h1 className={classes.title}>Registration</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        required
                    />
                </div>
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
                <button type="submit">Continue</button>
            </form>
        </div>
    );
}
export default RegisterModal;
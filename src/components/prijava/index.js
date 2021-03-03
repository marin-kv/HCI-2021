import React, { useState } from "react"
import styles from './style.module.css'
import { navigate } from "@reach/router";
import { myLocalStorage } from "../../helper";
import {Link} from "gatsby"

function checkCredentialsLogin(username, password, setFailedLogin) {
    const users = [{ username: "Marin", password: "1234" }, { username: "Petar", password: "12345" }];
    for (let user of users) {
        if (user.username === username && user.password === password) {
            myLocalStorage.setItem("username", username);
            myLocalStorage.setItem("loggedIn", true);
            setFailedLogin(false);
            return true
        }
    }
    setFailedLogin(true);
    return false

}

const Prijava = () => {
    const [failedLogin, setFailedLogin] = useState(false);

    const [usernameInput, setUsername] = useState("");
    const [passwordInput, setPassword] = useState("");

    return (
        <main className={styles.body}>
            <div className={styles.prijavi_se_header}>Prijavi se</div>
            <div className={styles.user_pass}>
                <form><input className={styles.input_window} type="text" placeholder="Korisničko ime ili email" size="20" onChange={(e) => setUsername(e.target.value)} /></form>
                <button onClick={() => alert("Žao mi je 😂")} className={styles.forgot}>Zaboravili ste korisničko ime?</button>
            </div>
            <div className={styles.user_pass}>
                <form><input className={styles.input_window} type="password" placeholder="Lozinka" size="20" onChange={(e) => setPassword(e.target.value)} /></form>
                <button onClick={() => alert("Žao mi je 😂")} className={styles.forgot}>Zaboravili ste lozinku?</button>
            </div>
            <div className={failedLogin === true ? styles.failed_login_true : styles.failed_login_false}>Kriva lozinka i/ili korisničko ime</div>
            <button className={styles.login_button} onClick={() => {checkCredentialsLogin(usernameInput, passwordInput, setFailedLogin) ? navigate('/') : navigate('/prijava/')}}>Prijava</button>
            <div>Nemate račun?</div>
            <Link to="/registracija/"><div className={styles.register}>Registriraj se</div></Link>
        </main>

    )
}

export default Prijava
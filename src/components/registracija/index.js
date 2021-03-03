import React, { useState } from "react"
import styles from './style.module.css'
import { navigate } from "@reach/router";
import { myLocalStorage } from "../../helper";

function checkCredentialsRegister(username, password, passwordCheck, setFailedRegister) {
    if (passwordCheck === password) {
        myLocalStorage.setItem("username", username);
        myLocalStorage.setItem("loggedIn", true);
        return true
    }
    setFailedRegister(true);
    return false

}

const Registracija = () => {

    const [usernameInput, setUsername] = useState("");
    const [passwordInput, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");

    const [failedRegister, setFailedRegister] = useState(false);

    return (
        <main className={styles.body}>
            <div className={styles.registriraj_se_header}>Registriraj se</div>
            <div className={styles.user_pass}>
                <input className={styles.input_window} type="text" placeholder="Email" size="20" />
            </div>
            <div className={styles.user_pass}>
                <input onChange={(e) => setUsername(e.target.value)} className={styles.input_window} type="text" placeholder="Korisničko ime" size="20" />
            </div>
            <div className={styles.user_pass}>
                <input onChange={(e) => setPassword(e.target.value)} className={styles.input_window} type="password" placeholder="Lozinka" size="20" />
            </div>
            <div className={styles.user_pass}>
                <input onChange={(e) => setPasswordCheck(e.target.value)} className={styles.input_window} type="password" placeholder="Ponovite lozinku" size="20" />
            </div>
            <div className={failedRegister === true ? styles.failed_login_true : styles.failed_login_false}>Pogrešno ponovljena lozinka</div>
            <button onClick={() => checkCredentialsRegister(usernameInput, passwordInput, passwordCheck, setFailedRegister) ? navigate('/') : navigate('/registracija/')} className={styles.login_button}>Registracija</button>
        </main>

    )
}

export default Registracija
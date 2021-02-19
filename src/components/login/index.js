import React, { useState } from "react"
import styles from './style.module.css'
import Login_icon from "../Images/login_icon"
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

function checkCredentialsLogin(username, password, setOpenLogin, setFailedLogin) {
    const users = [{ username: "Marin", password: "1234" }, { username: "Petar", password: "12345" }];
    for (let user of users) {
        if (user.username === username && user.password === password) {
            localStorage.setItem("username", username);
            setOpenLogin(false);
            return true
        }
    }
    setFailedLogin(true);
    return false

}

function checkCredentialsRegister(username, password, passwordCheck, setOpenRegister, setFailedRegister) {
    if(passwordCheck === password){
        localStorage.setItem("username",username);
        setOpenRegister(false);
        return true
    }
    setFailedRegister(true);
    return false

}

const Login = () => {
    const [failedLogin, setFailedLogin] = useState(false);
    const [failedRegister, setFailedRegister] = useState(false);

    const [usernameInput, setUsername] = useState("");
    const [passwordInput, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");

    const [openLogin, setOpenLogin] = useState(false);
    const [openRegister, setOpenRegister] = useState(false);

    const onOpenModalLogin = () => setOpenLogin(true);
    const onCloseModalLogin = () => setOpenLogin(false);

    const onOpenModalRegister = () => setOpenRegister(true);
    const onCloseModalRegister = () => setOpenRegister(false);

    if (localStorage.getItem("loggedIn") === "true") {
        return (
            <div className={styles.logged_in_style}>
                <div className={styles.logged_in_text}>Pozdrav, {localStorage.getItem("username")}</div>
                <a href="#" onClick={() => localStorage.setItem("loggedIn", false)} className={styles.logout_button}>Logout</a>
            </div>
        )
    }
    else return (
        <nav className={styles.login}>
            <button onClick={onOpenModalLogin} className={styles.prijava}><div className={styles.login_icon}><Login_icon /></div><div>Prijava</div></button>
            <button onClick={onOpenModalRegister} className={styles.registracija}>Registracija</button>
            <Modal open={openLogin} onClose={onCloseModalLogin} center
                classNames={{
                    overlay: 'customOverlay',
                    modal: styles.customModal,
                }}>
                <div className={styles.prijava_modal}>
                    <div>Prijavi se</div>
                    <div className={styles.user_pass}>
                        <form><input className={styles.input_window} type="text" placeholder="Korisničko ime ili email" size="50" onChange={(e) => setUsername(e.target.value)} /></form>
                        <button onClick={() => alert("Žao mi je 😂")} className={styles.forgot}>Zaboravili ste korisničko ime?</button>
                    </div>
                    <div className={styles.user_pass}>
                        <form><input className={styles.input_window} type="password" placeholder="Lozinka" size="50" onChange={(e) => setPassword(e.target.value)} /></form>
                        <button onClick={() => alert("Žao mi je 😂")} className={styles.forgot}>Zaboravili ste lozinku?</button>
                    </div>
                    <div className={failedLogin === true ? styles.failed_login_true : styles.failed_login_false}>Kriva lozinka i/ili korisničko ime</div>
                    <button onClick={() => localStorage.setItem("loggedIn", checkCredentialsLogin(usernameInput, passwordInput, setOpenLogin, setFailedLogin))} className={styles.login_button}>Prijava</button>
                </div>
            </Modal>
            <Modal open={openRegister} onClose={onCloseModalRegister} center
                classNames={{
                    overlay: 'customOverlay',
                    modal: styles.customModal,
                }}>
                <div className={styles.prijava_modal}>
                    <div>Registriraj se</div>
                    <div className={styles.user_pass}>
                        <input className={styles.input_window} type="text" placeholder="Email" size="50" />
                    </div>
                    <div className={styles.user_pass}>
                        <input onChange={(e) => setUsername(e.target.value)} className={styles.input_window} type="text" placeholder="Korisničko ime" size="50" />
                    </div>
                    <div className={styles.user_pass}>
                        <input onChange={(e) => setPassword(e.target.value)} className={styles.input_window} type="password" placeholder="Lozinka" size="50" />
                    </div>
                    <div className={styles.user_pass}>
                        <input onChange={(e) => setPasswordCheck(e.target.value)} className={styles.input_window} type="password" placeholder="Ponovite lozinku" size="50" />
                    </div>
                    <div className={failedRegister === true ? styles.failed_login_true : styles.failed_login_false}>Pogrešno ponovljena lozinka</div>
                    <button onClick={() => localStorage.setItem("loggedIn", checkCredentialsRegister(usernameInput, passwordInput, passwordCheck, setOpenRegister, setFailedRegister))} className={styles.login_button}>Registracija</button>
                </div>
            </Modal>
        </nav>
    )
}

export default Login
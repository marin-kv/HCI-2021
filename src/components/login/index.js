import React, { useState } from "react"
import styles from './style.module.css'
import Login_icon from "../Images/login_icon"
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';



const Login = () => {
    const [openLogin, setOpenLogin] = useState(false);
    const [openRegister, setOpenRegister] = useState(false);

    const onOpenModalLogin = () => setOpenLogin(true);
    const onCloseModalLogin = () => setOpenLogin(false);

    const onOpenModalRegister = () => setOpenRegister(true);
    const onCloseModalRegister = () => setOpenRegister(false);
    return (
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
                        <input className={styles.input_window} type="text" placeholder="Korisničko ime ili email" size="50" />
                        <a onClick={() => alert("Žao mi je 😂")} className={styles.forgot}>Zaboravili ste korisničko ime?</a>
                    </div>
                    <div className={styles.user_pass}>
                        <input className={styles.input_window} type="password" placeholder="Lozinka" size="50" />
                        <a onClick={() => alert("Žao mi je 😂")} className={styles.forgot}>Zaboravili ste lozinku?</a>
                    </div>
                    <button className={styles.login_button}>Prijava</button>
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
                        <input className={styles.input_window} type="text" placeholder="Korisničko ime" size="50" />
                    </div>
                    <div className={styles.user_pass}>
                        <input className={styles.input_window} type="password" placeholder="Lozinka" size="50" />
                    </div>
                    <div className={styles.user_pass}>
                        <input className={styles.input_window} type="password" placeholder="Ponovite lozinku" size="50" />
                    </div>
                    <button className={styles.login_button}>Registracija</button>
                </div>
            </Modal>
        </nav>
    )
}

export default Login
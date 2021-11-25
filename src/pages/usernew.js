import React from 'react'
import styles from '../styles/usernew.module.css'
function Usernew() {
    function checkPassword() {
        let password = document.getElementById("password").value;
        let cnfrmPassword = document.getElementById("cnfrm-password").value;
        console.log(" Password:", password, '\n', "Confirm Password:", cnfrmPassword);
        let message = document.getElementById("message");

        if (password.length != 0) {
            if (password == cnfrmPassword) {
                message.textContent = "Passwords match";
                message.style.backgroundColor = "#1dcd59";
            }
            else {
                message.textContent = "Password don't match";
                message.style.backgroundColor = "#ff4d4d";
            }
        }
        else {
            alert("Password can't be empty!");
            message.textContent = "";
        }
    }
    return (
        <div className={styles.outer}>
            <div className={styles.heading}>
                User Registration
            </div>
            <form id="regForm">
                {/* action="/" method="get" */}
                <table>
                    <tboby>
                        <tr>
                            <td className={styles.lbl}>First Name</td>
                            <td><input type="text" name="fname" id="name" className={styles.textbox} /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><label className={styles.help}></label></td>
                        </tr>
                        <tr>
                            <td className={styles.lbl}>Last Name</td>
                            <td><input type="text" name="lname" id="name" className={styles.textbox} /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><label className={styles.help}></label></td>
                        </tr>
                        <tr>
                            <td className={styles.lbl}>Username</td>
                            <td><input type="text" name="mail" id="mail" className={styles.textbox} /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><label className={styles.help}></label></td>
                        </tr>
                        <tr>
                            <td className={styles.lbl} id="password">Password</td>
                            <td><input type="password" name="password1" id="password1" className={styles.textbox} /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><label className={styles.help}></label></td>
                        </tr>
                        <tr>
                            <td className={styles.lbl} id="cnfrmPassword">Confirm Password</td>
                            <td><input type="password" name="password2" id="password2" className={styles.textbox} /></td>
                        </tr>
                        <p id="message"></p>
                        <tr>
                            <td></td>
                            <td><label className={styles.help}></label></td>
                        </tr>
                        <tr>
                            <td className={styles.lbl}>Residential Address</td>
                            <td><textarea maxlength="250" name="info" id="info" className={styles.textbox}></textarea></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><label className={styles.help}></label></td>
                        </tr>
                        <tr>
                            <td className={styles.lbl}>Email ID</td>
                            <td><input type="text" name="mail" id="mail" className={styles.textbox} /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><label className={styles.help}></label></td>
                        </tr>
                        <tr>
                            <td className={styles.lbl}>Mobile number</td>
                            <td><input type="text" name="mail" id="mail" className={styles.textbox} /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><label className={styles.help}></label></td>
                        </tr>
                        <tr>
                            <td className={styles.lbl}>Car Registration number</td>
                            <td><input type="text" name="mail" id="mail" className={styles.textbox} /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><label className={styles.help}></label></td>
                        </tr>
                    </tboby>
                </table>
                <input type="submit" id="send" value="Register" className={styles.register} onClick={checkPassword} />
            </form>

        </div>
    )
}

export default Usernew

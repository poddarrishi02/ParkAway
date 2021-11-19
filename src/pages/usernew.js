import React from 'react'
import styles from '../styles/usernew.module.css'
function Usernew() {
    return (
        <div className={styles.outer}>
        <div className={styles.heading}>
            User Registration
        </div>
            <form action="/reg" method="POST" id="regForm">
                
                <table>
                    <tboby>
                        <tr>
                            <td className={styles.lbl}>First Name</td>
                            <td><input type ="text" name="fname" id="name" className ={styles.textbox}/></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><lable className={styles.help}></lable></td>
                        </tr>
                        <tr>
                            <td className={styles.lbl}>Last Name</td>
                            <td><input type ="text" name="lname" id="name" className ={styles.textbox}/></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><lable className={styles.help}></lable></td>
                        </tr>
                        <tr>
                            <td className={styles.lbl}>Username</td>
                            <td><input type ="text" name="mail" id="mail" className ={styles.textbox}/></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><lable className={styles.help}></lable></td>
                        </tr>
                        <tr>
                            <td className={styles.lbl}>Password</td>
                            <td><input type ="password" name="password1" id="password1" className ={styles.textbox}/></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><lable className={styles.help}></lable></td>
                        </tr>
                        <tr>
                            <td className={styles.lbl}>Confirm Password</td>
                            <td><input type ="password" name="password2" id="password2" className ={styles.textbox}/></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><lable className={styles.help}></lable></td>
                        </tr>
                        <tr>
                            <td className={styles.lbl}>Residential Address</td>
                            <td><textarea maxlength="250" name="info" id="info" className ={styles.textbox}></textarea></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><lable className={styles.help}></lable></td>
                        </tr>
                        <tr>
                            <td className={styles.lbl}>Email ID</td>
                            <td><input type ="text" name="mail" id="mail" className ={styles.textbox}/></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><lable className={styles.help}></lable></td>
                        </tr>
                        <tr>
                            <td className={styles.lbl}>Mobile number</td>
                            <td><input type ="text" name="mail" id="mail" className ={styles.textbox}/></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><lable className={styles.help}></lable></td>
                        </tr>
                        <tr>
                            <td className={styles.lbl}>Car Registration number</td>
                            <td><input type ="text" name="mail" id="mail" className ={styles.textbox}/></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><lable className={styles.help}></lable></td>
                        </tr>
                    </tboby>
                </table>
                <input type="submit" id="send" value="Register" className={styles.register}/>
            </form>

        </div>
    )
}

export default Usernew

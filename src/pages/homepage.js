import React from 'react'
import styles from '../styles/homepage.module.css'
function Homepage() {
    return (
        <div className={styles.outer}>
            <div className={styles.options}>
                <div className={`${styles.op1} ${styles.option} `} id="admin">Admin</div>
                <div className={`${styles.op2} ${styles.option} `} id="user">User</div>
                <div className={`${styles.op3} ${styles.option} `} id="staff">Staff</div>
            </div>
        </div>
    )
}

export default Homepage

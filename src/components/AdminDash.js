import React from 'react'
import styles from '../styles/dashboard/admin.module.css'
function AdminDash() {
    return (
        <div className={styles.outer}>
            <div className={styles.topNav}>
            <div className={styles.navHead}>Admin</div>
            </div>
            <div className={styles.content}>
                <div className={styles.leftNav}>
                    {/* <div className={styles.navHead}>Admin</div> */}
                    <div className={styles.dashItems}>Manage workers</div>
                    <div className={styles.dashItems}>2</div>
                    <div className={styles.dashItems}>3</div>
                    <div className={styles.dashItems}>4</div>
                    <div className={styles.dashItems}>5</div>
                    <div className={styles.dashItems}>6</div>
                </div>
                <div className={styles.display}></div>
            </div>
        </div>
    )
}

export default AdminDash

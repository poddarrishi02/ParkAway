import React, { useState } from 'react'
import styles from '../styles/dashboard/mybooking.module.css'
import workersList from './WorkersReportList';
function WorkersReport() {
    // const workersInitial = [{ loc: "A", date: "20/12/2021", inTime: "09:10am", outTime: "10:10am", cost: "$10", status: "workers Confirmed" }, { loc: "B", date: "30/12/2021", inTime: "10:00pm", outTime: "11:30pm", cost: "$30", status: "workers Confirmed" }, { loc: "C", date: "28/12/2021", inTime: "09:00am", outTime: "10:00pm", cost: "$40", status: "workers Confirmed" }];
    // const workerssInitial = [];
    // const [workers, setworkers] = useState(workersInitial);
    const headings = ["Username", "workers name", "Status", "Rating", "Services"];
    return (
        <div className={styles.outer}>
            {/* <div className={styles.title}>My workerss</div> */}
            <div className={styles.manage}>
                {workersList.length == 0 ? <div className={styles.noworkers}>No workers</div> :
                    <table style={{width:"100vw",height:"80vh"}}>
                        <thead>
                            {headings.map(x => {
                                return (
                                    <th className={styles.tablehead}>{x}</th>
                                );
                            })}
                        </thead>
                        <tbody>
                            {workersList.map(w => {
                                return (
                                    <tr>
                                        <td className={styles.tablerows} data-label="loc">{w.username} </td>
                                        <td className={styles.tablerows} data-label="date">{w.name} </td>
                                        <td className={styles.tablerows} data-label="status"
                                        style={w.status=="Active"?{color:"rgb(47, 255, 75)"}:{color:"red"}}>{w.status}</td>
                                        <td className={styles.tablerows} data-label="outTime">{w.rating}</td>
                                        <td className={styles.tablerows} data-label="services" style={{minHeight:"100%",display:"flex",flexDirection:"column",justifyContent:"center"}}>
                                            <span className={styles.serviceop}>{w.dry_cleaning_enable==true?"Dry cleaning":null}</span>
                                            <span className={styles.serviceop}>{w.washing_enable==true?"Washing":null}</span>
                                            <span className={styles.serviceop}>{w.repairing_enable==true?"Repairing":null}</span>
                                        </td>
                                    </tr>);
                            })}
                        </tbody>
                    </table>}
            </div>
        </div >
    )
}

export default WorkersReport

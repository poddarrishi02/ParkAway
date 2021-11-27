import React, { useState } from 'react'
import styles from '../styles/dashboard/admin.module.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@mui/material/Button';
import AddWorker from './AddWorker';
import RemoveWorker from './RemoveWorker';
import Default from './Default';

function AdminDash() {
    const [active, setactive] = useState(<Default />);
    return (
        <div className={styles.outer}>
            <div className={styles.topNav}>
                <div className={styles.navHead}>Admin</div>
            </div>
            <div className={styles.content}>
                <div className={styles.leftNav}>
                    <div className={styles.dashItems}>
                        <Accordion style={{ backgroundColor: "rgb(17, 14, 14)" }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon style={{ fill: "white" }} />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography style={{ color: "white", fontSize: "1.2em" }}>Manage Workers</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className={styles.manage}>
                                    <Button onClick={() => {
                                        setactive(<AddWorker />)
                                    }} variant="text" style={{ justifyContent: "flex-start", color: "white", textTransform: "none" }}
                                        sx={{ ':hover': { bgcolor: 'rgb(60,60,60)' } }}>Add Workers</Button>
                                    <Button onClick={() => {
                                        setactive(<RemoveWorker />)
                                    }} variant="text" style={{ justifyContent: "flex-start", color: "white", textTransform: "none" }}
                                        sx={{ ':hover': { bgcolor: 'rgb(60,60,60)' } }}>Remove Workers</Button>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                    </div>
                    <div className={styles.dashItems}>2</div>
                    <div className={styles.dashItems}>3</div>
                    <div className={styles.dashItems}>4</div>
                    <div className={styles.dashItems}>5</div>
                    <div className={styles.dashItems}>6</div>
                </div>
                <div className={styles.display}>
                    {active}
                </div>
            </div>
        </div>
    )
}

export default AdminDash

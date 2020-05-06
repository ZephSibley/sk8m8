import React, { useState, } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';


const TsCsModal = props => {

    const [close, setClose] = useState(false);

    const useStyles = makeStyles(theme => ({
        modal: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '25px',
            maxHeight: '90%'
        },
        content: {
            width: '70%',
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            maxHeight: '100%',
            overflow: 'scroll',
        },
    }));

    const classes = useStyles();
    return (
        <Modal
            className={classes.modal}
            aria-labelledby="TsCs modal"
            aria-describedby="application terms and conditions"
            open={close ? false : props.open}
        >
            <div className={classes.content}>
                <h2 id="simple-modal-title">
                    SK8M8 Terms and Conditions
                </h2>
                <p id="simple-modal-description">
                    Please read these Terms and Conditions ("Terms") carefully before using sk8m8.co webapp (the "Service").
                </p>
                <p>
                    Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms.
                    These terms apply to all visitors, users, and others who access or use the Service.
                </p>
                <p>
                    By Accessing or using the Service you agree to be bound by these Terms.
                </p>
                <h3>
                    Termination
                </h3>
                <p>
                    We may terminate or suspend access to our Service immediately, without prior notice or liability,
                    for any reason whatsoever, including without limitation if you breach the Terms.
                </p>
                <h3>
                    Location based features
                </h3>
                <p>
                    The core features of the Service are location-based.
                    By using these features you agree to grant use of your location while using the Service.
                    We will NOT collect location information while the Service is not in use.
                </p>
                <h3>
                    Community Rules
                </h3>
                <p>
                    By using the Service, you agree that you will not:
                </p>
                <ul>
                    <li>
                        Use the Service for any purpose illegal, harmful, or prohibited by these Terms and Conditions.
                    </li>
                    <li>
                        Impersonate any person or entity, or upload media of another person without their permission.
                    </li>
                    <li>
                        Use the Service to deliver content which includes hate speech, racism, bigotry, spam, targeted harassment, or fraudulent content.
                    </li>
                    <li>
                        Maintain more than one account or share an account with another person.
                    </li>
                    <li>
                        Create another account if we have terminated your account, without permission.
                    </li>
                </ul>
                <h3>
                    Disclaimer    
                </h3>
                <p>
                    The Service owner takes no responsibility for user created content.
                    Any user created material is accessed at your own discretion and risk.
                </p>
                <Button
                    variant="contained"
                    color="primary"
                    component="span"
                    onClick={e => setClose(true)}
                >
                    OK
                </Button>
            </div>
        </Modal>
    )
}

export default TsCsModal;
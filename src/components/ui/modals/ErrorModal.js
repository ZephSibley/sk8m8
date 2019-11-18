import React, { useState, } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';


const ErrorModal = props => {
    // Prop: Error; string

    const useStyles = makeStyles(theme => ({
        modal: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '-20vh',
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '70%',
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }));

    const classes = useStyles();
    return (
        <Modal
            className={classes.modal}
            aria-labelledby="error modal"
            aria-describedby="something went wrong"
            open={true}
        >
            <div className={classes.content}>
                <h2 id="simple-modal-title">
                    Uh oh, something went wrong D:
                </h2>
                <p id="simple-modal-description">
                    {props.error}
                </p>
                <Button
                    variant="contained"
                    color="primary"
                    component="span"
                    onClick={e => window.location.reload()}
                >
                    OK
                </Button>
            </div>
        </Modal>
    )
}

export default ErrorModal;
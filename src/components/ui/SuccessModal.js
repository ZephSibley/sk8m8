import React, { useState, } from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';


const SuccessModal = props => {
    // Optional Prop: redirect; string

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
            width: 400,
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
            aria-labelledby="success modal"
            aria-describedby="whatever you did succeeded!"
            open={true}
        >
            <div className={classes.content}>
                <h2 id="simple-modal-title">Success!</h2>
                <Link
                    to={props.redirect ?
                        props.redirect : ''
                    }
                    style={{ textDecoration: 'none' }}
                >
                    <Button
                        variant="contained"
                        color="primary"
                        component="span"
                    >
                        OK
                    </Button>
                </Link>
            </div>
        </Modal>
    )
}

export default SuccessModal;
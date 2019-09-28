import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const ErrorModal = props => {
    const classes = useStyles();
    return (
        <Modal
            aria-labelledby="error modal"
            aria-describedby="something went wrong"
            open={props.error}
        >
            <div className={classes.paper}>
                <h2 id="simple-modal-title">Uh oh, something went wrong D:</h2>
                <p id="simple-modal-description">
                    {props.error}
                </p>
                <Button
                    variant="contained"
                    color="primary"
                    component="span"
                >
                    OK
                </Button>
            </div>
        </Modal>
    )
}

export default ErrorModal;
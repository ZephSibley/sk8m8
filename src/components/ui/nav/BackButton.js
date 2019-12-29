import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';

const BackButton = () => {

    const useStyles = makeStyles({
        root: {
            //width: '100vw',
            position: 'fixed',
            top: 10,
            left: 5,
        },
    });

    const classes = useStyles();
    return (
        <ArrowBackIcon
            className={classes.root}
            onClick={() => window.history.back()}
        />
    )
}

export default BackButton;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';


const UserCard = props => {

    const useStyles = makeStyles({
        card: {
            minWidth: 275,
        },
        bullet: {
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)',
        },
        title: {
            fontSize: 14,
        },
        pos: {
            marginBottom: 12,
        },
    });

    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardContent>
                <Avatar
                    alt={props.username}
                    src={props.avatar}
                />
                <Typography variant="h5" component="h2">
                    {props.username}
                </Typography>
                <Typography variant="body2" component="p">
                    {props.bio}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default UserCard;
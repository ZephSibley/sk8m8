import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
}));


const MessageListItem = props => {
    // Prop: sender; string
    // Prop: avatar; string, url src
    // Prop: message; string
    const classes = useStyles();

    return (
        <React.Fragment>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                <Avatar
                    alt={props.sender}
                    src={props.avatar}
                    //imgProps={loading='lazy'}
                />
                </ListItemAvatar>
                <ListItemText
                primary={props.sender}
                secondary={
                    <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                    >
                        {props.message}
                    </Typography>
                }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </React.Fragment>
    )
}

export default MessageListItem;
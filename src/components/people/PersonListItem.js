import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
// import ChatIcon from '@material-ui/icons/Chat';


const PersonListItem = props => {
    // Prop: username; string
    // Prop: avatar; string, url src
    // Prop: status; string
    // Prop: chat; function, takes username - opens ChatView

    return (
        <React.Fragment>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    {typeof props.avatar === "function" ?
                        props.avatar : // If it's a function it is a component
                        <Avatar
                            alt={props.username}
                            src={props.avatar || ''}
                            //imgProps={loading='lazy'}
                        />
                    }
                </ListItemAvatar>
                <ListItemText
                primary={props.username}
                secondary={
                    <Typography
                        component="p"
                        variant="body2"
                        color="textPrimary"
                    >
                        {props.status}
                    </Typography>
                }
                />
                {/*
                    <ChatIcon
                        color='primary'
                        fontSize='large'
                        onClick={() => props.chat(props.username)}
                    />
                */}
            </ListItem>
            <Divider variant="inset" component="li" />
        </React.Fragment>
    )
};

export default PersonListItem;
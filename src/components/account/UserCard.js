import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';


const UserCard = props => {
    // Prop: username; string
    // Prop: avatar; string, url
    // Prop: bio; string

    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar
                        alt={props.username}
                        src={props.avatar}
                    />
                }
                // action={
                //     <IconButton aria-label="settings">
                //         <MoreVertIcon />
                //     </IconButton>
                // }
                title={props.username}
            />
            <CardContent>
                <Typography variant="body2" component="p">
                    {props.bio}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default UserCard;
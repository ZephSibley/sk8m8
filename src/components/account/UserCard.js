import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import UpdateStatusForm from '../ui/forms/UpdateStatusForm';

import spinner from '../../assets/img/ajax-loader.gif'


const UserCard = props => {
    // Prop: requests; http client

    const [userDetails, updateUserDetails] = useState({
        username: 'Loading',
        avatar: spinner,
        status: ''
    })

    useEffect(() => {
        // Get location, add to queryurl
        props.requests.get(`
            ${process.env.REACT_APP_ENDPOINT}
            /Account/Details
        `).then(data => 
            updateUserDetails(data)
        ).catch(err =>
            updateUserDetails({
                username: 'Something went wrong D:',
                avatar: '',
                status: err.message
            })
        );          
    }, [props.requests])

    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar
                        alt={userDetails.username}
                        src={userDetails.avatar}
                    />
                }
                // action={
                //     <IconButton aria-label="settings">
                //         <MoreVertIcon />
                //     </IconButton>
                // }
                title={userDetails.username}
            />
            <CardContent>
                <UpdateStatusForm 
                    currentStatus={userDetails.status} 
                    requests={props.requests}
                />
            </CardContent>
        </Card>
    );
}

export default UserCard;
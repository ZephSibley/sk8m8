import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
// import Avatar from '@material-ui/core/Avatar';
import  CircularProgress from '@material-ui/core/CircularProgress'

import UpdateStatusForm from '../ui/forms/UpdateStatusForm';
// import UploadAvatarForm from '../ui/forms/UploadAvatarForm';


const UserCard = props => {
    // Prop: requests; http client

    const [userDetails, updateUserDetails] = useState({
        username: 'Loading',
        avatar: <CircularProgress />,
        status: ''
    })

    useEffect(() => {
        // Get location, add to queryurl
        props.requests.get(
            `${process.env.REACT_APP_ENDPOINT}account/me`,
            {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }
        ).then(response => 
            updateUserDetails(response.data)
        ).catch(err => {
            if (err.response && err.response.status === 401) {
                window.localStorage.removeItem('token');
                window.location.reload();
            }
            updateUserDetails({
                username: 'Something went wrong D:',
                avatar: '/',
                status: err.message
            })
        });
    }, [props.requests])

    return (
        <Card>
            <CardHeader
                /*avatar={
                    userDetails.avatar ?
                    <Avatar
                        alt={userDetails.username}
                        src={userDetails.avatar}
                    />
                    :
                    <UploadAvatarForm requests={props.requests} />
                }*/ // AVATAR FEATURE
                
                // action={
                //     <IconButton aria-label="settings">
                //         <MoreVertIcon />
                //     </IconButton>
                // }
                title={userDetails.username}
                subheader=""
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
import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import axios from 'axios';

import '../styles/screens.css'
import UserCard from '../components/account/UserCard';
import UpdateEmailForm from '../components/ui/forms/UpdateEmailForm';
import UpdatePasswordForm from '../components/ui/forms/UpdatePasswordForm';

// CHANGE ME IN PRODUCTION
const userDetailsMock = {username: 'zeph', avatar:'', status:'bio bio bio'}


const HomeScreen = () => {

    const [expanded, setExpanded] = React.useState(false);

    const togglePanel = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={'screen'}>

            <UserCard
                requests={axios}
                username={userDetailsMock.username}
                avatar={userDetailsMock.avatar}
                bio={userDetailsMock.bio}
            />

            <ExpansionPanel
                expanded={expanded === 'emailPanel'}
                onChange={togglePanel('emailPanel')}
            >
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="update-email"
                    id="update-email-header"
                >
                    <Typography>Update Email</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <UpdateEmailForm />
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
                expanded={expanded === 'passwordPanel'}
                onChange={togglePanel('passwordPanel')}
            >
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="update-password"
                    id="update-password-header"
                >
                    <Typography>Update Password</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <UpdatePasswordForm />
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}

export default HomeScreen;
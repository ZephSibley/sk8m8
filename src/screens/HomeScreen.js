import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';

import '../styles/screens.css'
import UserCard from '../components/account/UserCard';
import UpdateEmailForm from '../components/ui/forms/UpdateEmailForm';
import UpdatePasswordForm from '../components/ui/forms/UpdatePasswordForm';
import LogoutForm from '../components/ui/forms/LogoutForm';
import formStyles from '../styles/forms';
import TsCs from '../components/ui/text/TsCs';

// CHANGE ME IN PRODUCTION
const userDetailsMock = {username: 'zeph', avatar:'', status:'bio bio bio'}


const HomeScreen = () => {
    const formClasses = formStyles();

    const [expanded, setExpanded] = React.useState(false);
    const [showTsCs, setShowTsCs] = React.useState(false);

    const togglePanel = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={'screen'}>
            <LogoutForm requests={axios} />
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

            <Modal
                className={formClasses.modal}
                aria-labelledby="TsCs modal"
                aria-describedby="application terms and conditions"
                open={showTsCs}
            >
                <div className={formClasses.modalContent}>
                    <TsCs />
                    <Button
                        variant="contained"
                        color="primary"
                        component="span"
                        onClick={e => setShowTsCs(false)}
                    >
                        OK
                    </Button>
                </div>
            </Modal>
            <Button color="primary" onClick={e => { setShowTsCs(true) }}> terms and conditions.</Button>

        </div>
    );
}

export default HomeScreen;
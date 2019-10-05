import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import '../styles/screens.css'
import UpdateEmailForm from '../components/ui/forms/UpdateEmailForm';
import UpdatePasswordForm from '../components/ui/forms/UpdatePasswordForm';

// https://material-ui.com/components/expansion-panels/

const HomeScreen = () => {

    const [expanded, setExpanded] = React.useState(false);

    const togglePanel = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={'screen'}>
            <ExpansionPanel expanded={expanded === 'accountPanel'} onChange={togglePanel('accountPanel')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="account-settings"
                    id="account-settings-header"
                >
                    <Typography>Account settings</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <UpdateEmailForm />
                    <UpdatePasswordForm />
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}

export default HomeScreen;
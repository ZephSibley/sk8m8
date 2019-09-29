import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import '../styles/screens.css'

const HomeScreen = () => {

    const [expanded, setExpanded] = React.useState(false);

    const togglePanel = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={'screen'}>
            <ExpansionPanel expanded={expanded === 'accountPanel'} onChange={togglePanel('panel1')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="account-settings"
                    id="account-settings-header"
                >
                    <Typography>Account settings</Typography>
                    <Typography>Manage your account details</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}

export default HomeScreen;
import React, { useState, useEffect } from 'react';
import List from '@material-ui/core/List';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import ErrorModal from '../components/ui/modals/ErrorModal';
import spinner from '../assets/img/ajax-loader.gif';
import PersonListItem from '../components/people/PersonListItem';
import ChatView from '../components/people/ChatView';


const PeopleScreen = () => {
    const [error, setError] = useState(false);
    const [PeopleListItems, SetPeopleListItems] = useState(null);
    const [interlocutor, setInterlocutor] = useState(false);

    const openChat = username => {
        setInterlocutor(username)
    }

    useEffect(() => {
        // Get location, add to queryurl
        /* fetchpeople.then(data => 
            PeopleListItems(response.data.map(PersonListItem))
            ).catch(err =>
                setError(err)
            )            
        */
    }, [])
    
    return (
        <div className='screen'>
            <List>
                {PeopleListItems ?
                    <img src={spinner} alt='loading' /> :
                    PeopleListItems
                }
            </List>
            <SwipeableDrawer
                open={interlocutor}
            >
                <ChatView interlocutor={interlocutor} />
            </SwipeableDrawer>
            <ErrorModal error={error}  />
        </div>
    )
}

export default PeopleScreen;
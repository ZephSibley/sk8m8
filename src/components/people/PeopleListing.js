import React, { useState, useEffect } from 'react';
import List from '@material-ui/core/List';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import spinner from '../../assets/img/ajax-loader.gif';
import PersonListItem from '../../components/people/PersonListItem';
import ChatView from '../../components/people/ChatView';


const PeopleListing = props => {
    // Prop: requests; http client
    // Prop: location; latlong array

    const [peopleListInfo, setPeopleListInfo] = useState([{
        key: 0,
        username: 'Loading...',
        avatar: spinner,
        bio: '',
        chat: function(){}
    }]);
    const [interlocutor, setInterlocutor] = useState('');
    const [chatting, setChatting] = useState(false);

    const toggleChat = username => {
        setChatting(x => !x)
        setInterlocutor(username || '')
    }

    useEffect(() => {
        // Get location, add to queryurl
        if (props.location[0] !== null && props.location[1] !== null) {
            props.requests.get(
                `${process.env.REACT_APP_ENDPOINT}People/Find?latitude=${props.location[0]}&longitude=${props.location[1]}&radius=${50}`,
                {
                    headers: {
                        'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                    }
                }
            ).then(response => {
                response.data.chat = toggleChat
                setPeopleListInfo(data)
            }).catch(err =>
                setPeopleListInfo([{
                    key: 0,
                    username: 'Something went wrong D:',
                    avatar: '',
                    bio: err.message,
                    chat: function(){}
                }])
            );
        }        
    }, [props.requests, props.location])

    return (
        <React.Fragment>
            <List>
                {peopleListInfo.map(PersonListItem)}
            </List>
            <div style={{marginBottom: 100}}></div>
            <SwipeableDrawer
                open={chatting}
                onClose={() => setChatting()}
                onOpen={() => setChatting()}
            >
                <ChatView interlocutor={interlocutor} />
            </SwipeableDrawer>
        </React.Fragment>
    )
}

export default PeopleListing
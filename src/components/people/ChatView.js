import React, { useState, useEffect } from 'react';
import * as signalR from '@aspnet/signalr';
import List from '@material-ui/core/List';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import ErrorModal from '../ui/modals/ErrorModal';
import MessageListItem from '../people/MessageListItem';

const ChatView = props => {
    // Prop: interlocutor; string, person we're talking to

    const [myMessage, updateMyMessage] = useState('');
    const [messages, updateMessages] = useState([]);
    const [hubConnection, setHubConnection] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        setHubConnection(new signalR.HubConnectionBuilder()
            .withUrl(`${process.env.REACT_APP_ENDPOINT}/hubs/chat`, { /*accessTokenFactory: getAccessToken()*/ })
            .configureLogging(signalR.LogLevel.Information)
            .build()
        );
    }, []);

    useEffect(() => {
        hubConnection.start()
            .then(() => console.log('Connected to chat'))
            .catch(err => setError(err));

        hubConnection.on('ReceiveMessage', (req) => {
            updateMessages([...messages, MessageListItem(req)])
        })
    }, [hubConnection])

    const sendMessage = async (interlocutor, message) => {
        hubConnection
            .invoke('SendMessage', interlocutor, message)
            .catch(err => setError(err));
        updateMyMessage('');
    }

    return(
        <div className='screen'>
            <List>
                {messages}
            </List>
            <form autoComplete="off">
                <TextField
                    required
                    id="outlined-dense-multiline"
                    label="Dense multiline"
                    margin="dense"
                    variant="outlined"
                    multiline
                    rowsMax="20"
                    onChange={e => updateMyMessage(e.target.value)}
                />
                <Button
                    variant="outlined"
                    color="primary"
                    component="span"
                    onClick={sendMessage(props.interlocutor, myMessage)}
                >
                    Send
                </Button>
            </form>
            <ErrorModal error={error} />
        </div>
    );
}

export default ChatView
import { Container, Box, Typography, Button, TextField, Divider, List, ListItem, ListItemAvatar, Avatar, ListItemText, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import avatar from '../assets/images/test-photo.jpg';
import { Link } from 'react-router-dom';

const mentors = [
    { id: 1, name: 'Mentor A' },
    { id: 2, name: 'Mentor B' },
    // Add more mentors as needed
];

const Message = () => {
    const [receivedMessages, setReceivedMessages] = useState([
        { id: 1, sender: 'Mentor A', message: 'Hello! How can I help you?' },
        // Add more received messages as needed
    ]);

    const [sentMessages, setSentMessages] = useState([]);

    const [selectedRecipient, setSelectedRecipient] = useState(mentors[0].id);
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        if (newMessage.trim() !== '') {
            const recipient = mentors.find(mentor => mentor.id === selectedRecipient);
            if (recipient) {
                setSentMessages(prevSentMessages => [
                    ...prevSentMessages,
                    { id: prevSentMessages.length + 1, recipient: recipient.name, message: newMessage }
                ]);
                setNewMessage('');
            }
        }
    };

    const handleDeleteMessage = (messageId, messageType) => {
        if (messageType === 'received') {
            const updatedReceivedMessages = receivedMessages.filter(message => message.id !== messageId);
            setReceivedMessages(updatedReceivedMessages);
        } else if (messageType === 'sent') {
            const updatedSentMessages = sentMessages.filter(message => message.id !== messageId);
            setSentMessages(updatedSentMessages);
        }
    };

    return (
        <Container>
            <Box sx={{ padding: '2rem' }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Message Inbox
                </Typography>
                <Divider />
                <Typography variant="h5" component="h2" mt={2}>
                    Received Messages
                </Typography>
                <List>
                    {receivedMessages.map(message => (
                        <ListItem key={message.id} alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt={message.sender} src={avatar} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={message.sender}
                                secondary={message.message}
                            />
                            <Button
                                variant="outlined"
                                color="error"
                                onClick={() => handleDeleteMessage(message.id, 'received')}
                            >
                                Delete
                            </Button>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <Typography variant="h5" component="h2" mt={8}>
                    Send a Message
                </Typography>
                <FormControl fullWidth sx={{ marginY: 2 }}>
    <Box sx={{ marginTop: '2rem' }}>
        <InputLabel>Recipient</InputLabel>
    </Box>
    <Select
        value={selectedRecipient}
        onChange={e => setSelectedRecipient(Number(e.target.value))}
    >
        {mentors.map(mentor => (
            <MenuItem key={mentor.id} value={mentor.id}>
                {mentor.name}
            </MenuItem>
        ))}
    </Select>
</FormControl>

                <TextField
                    multiline
                    rows={4}
                    fullWidth
                    variant="outlined"
                    label="Message"
                    value={newMessage}
                    onChange={e => setNewMessage(e.target.value)}
                    sx={{ marginY: 2 }}
                />
                <Button variant="contained" color="primary" onClick={handleSendMessage}>
                    Send
                </Button>
                <Divider />
                <Typography variant="h5" component="h2" mt={8}>
                    Sent Messages
                </Typography>
                <List>
                    {sentMessages.map(message => (
                        <ListItem key={message.id} alignItems="flex-start">
                            <ListItemText
                                primary={`To: ${message.recipient}`}
                                secondary={message.message}
                            />
                            <Button
                                variant="outlined"
                                color="error"
                                onClick={() => handleDeleteMessage(message.id, 'sent')}
                            >
                                Delete
                            </Button>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Container>
    );
};

export default Message;

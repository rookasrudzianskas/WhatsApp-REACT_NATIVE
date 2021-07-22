import React from 'react';
import {View, Text} from 'react-native';
import {Message} from "../../types";
import moment from "moment";
import styles from './style';

export type ChatMessageProps = {
    message: Message;
    myId: String;

}




const ChatMessage = (props: ChatMessageProps) => {

    const {message, myId} = props;

    const isMyMessage = () => {
        return message.user.id === myId;
    }
    // @ts-ignore
    return (
        <View style={styles.container}>
            <View style={[styles.messageBox, {backgroundColor: isMyMessage() ? "#dcf8c5" : "white", marginLeft: isMyMessage() ? 50 : 0, marginRight: isMyMessage() ? 0 : 50}]}>
                {!isMyMessage() && <Text style={styles.name}>{message.user.name}</Text>}
                <Text style={styles.message}>{message.content}</Text>
        {/*// @ts-ignore*/}
        {/*// @ts-ignore*/}
                <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
            </View>
        </View>
    )
}

export default ChatMessage;

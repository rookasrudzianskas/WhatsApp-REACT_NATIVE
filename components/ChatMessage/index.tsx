import React from 'react';
import {View, Text} from 'react-native';
import {Message} from "../../types";
import moment from "moment";
import styles from './style';

export type ChatMessageProps = {
    message: Message;

}




const ChatMessage = (props: ChatMessageProps) => {

    const {message} = props;

    const isMyMessage = () => {
        return message.user.id === "u1";
    }
    // @ts-ignore
    return (
        <View style={styles.container}>
            <View style={[styles.messageBox, {backgroundColor: isMyMessage() ? "#dcf8c5" : "white"}]}>
                <Text>{message.user.name}</Text>
                <Text>{message.content}</Text>
        {/*// @ts-ignore*/}
                <Text>{moment(message.createdAt).fromNow()}</Text>
            </View>
        </View>
    )
}

export default ChatMessage;

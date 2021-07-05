import React from 'react';
import {View, Text} from 'react-native';
import {Message} from "../../types";
import moment from "moment";

export type ChatMessageProps = {
    message: Message;
}


const ChatMessage = (props: ChatMessageProps) => {

    const {message} = props;
    // @ts-ignore
    return (
        <View>
            <Text>{message.user.name}</Text>
            <Text>{message.content}</Text>
    {/*// @ts-ignore*/}
            <Text>{moment(message.createdAt).fromNow()}</Text>
        </View>
    )
}

export default ChatMessage;

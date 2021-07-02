import React from 'react';
import {View, Text} from "react-native";
import styles from "./style";
import {ChatRoom} from "../../types";

export type ChatListItemProps = {
    chatRoom: ChatRoom;
}


const ChatListItem = (props: ChatListItemProps) => {

    const { chatRoom } = props;

    return (
        <View>
            <Text>{chatRoom.lastMessage.content}</Text>
        </View>
    );
};

export default ChatListItem;

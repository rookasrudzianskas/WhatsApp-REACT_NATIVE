import React from 'react';
import {View, Text, Image} from "react-native";
import styles from "./style";
import {ChatRoom} from "../../types";

export type ChatListItemProps = {
    chatRoom: ChatRoom;
}


const ChatListItem = (props: ChatListItemProps) => {

    const { chatRoom } = props;

    // @ts-ignore
    const user = chatRoom.users[1];

    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
    {/*// @ts-ignore*/}
                <Image source={{uri: user.imageUri }} style={styles.avatar} />

                <View style={styles.midContainer}>
    {/*// @ts-ignore*/}
                    <Text style={styles.username}>{user.name}</Text>
                    <Text style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
                </View>
            </View>

            {/*<Text>{chatRoom.lastMessage.createdAt}</Text>*/}
            <Text style={styles.time}>Yesterday</Text>
        </View>
    );
};

export default ChatListItem;

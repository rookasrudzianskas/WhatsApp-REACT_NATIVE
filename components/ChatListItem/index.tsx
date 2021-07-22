// import React, {useEffect, useState} from 'react';
// @ts-ignore
import React from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";
import styles from "./style";
// import {ChatRoom} from "../../types";
// import moment from "moment";
import { useNavigation } from "@react-navigation/native";
import {Auth} from "aws-amplify";
// @ts-ignore
import {ChatRoom} from "../../types";
import {useEffect, useState} from "react";
import moment from "moment";
export type ChatListItemProps = {
    chatRoom: ChatRoom;
}


const ChatListItem = (props: ChatListItemProps) => {

    const navigation = useNavigation();

    const { chatRoom } = props;
    const [otherUser, setOtherUser] = useState(null);

    useEffect(() => {

        const getOtherUser = async () => {
        const userInfo = await Auth.currentAuthenticatedUser();
        // @ts-ignore
        if (chatRoom.chatRoomUsers.items[0].user?.id === userInfo.attributes.sub) {
            // @ts-ignore
            setOtherUser(chatRoom.chatRoomUsers.items[1].user);
        } else {
            // @ts-ignore
            setOtherUser(chatRoom.chatRoomUsers.items[0].user);
        }
    }
    getOtherUser()
    }, [])

    const onClick = () => {
        //
        // @ts-ignore
        navigation.navigate("ChatRoom", {id: chatRoom.id, name: otherUser.name });
    }

    if(!otherUser) {
        return null;
    }

    return (
            <TouchableOpacity activeOpacity={0.8} onPress={onClick} >
                <View style={styles.container}>
                    <View style={styles.leftContainer}>
            {/*// @ts-ignore*/}
                        <Image source={{uri: otherUser.imageUri }} style={styles.avatar} />

                        <View style={styles.midContainer}>
            {/*// @ts-ignore*/}
                            <Text style={styles.username}>{otherUser.name}</Text>
                            <Text numberOfLines={1} style={styles.lastMessage}>{ chatRoom.lastMessage? chatRoom.lastMessage.content : ""}</Text>
                        </View>
                    </View>

            {/*// @ts-ignore*/}
                    <Text style={styles.time}>{chatRoom.lastMessage && moment(chatRoom.lastMessage.createdAt).format(" DD/MM/YYYY")}</Text>
                    {/*<Text style={styles.time}>Yesterday</Text>*/}
                </View>
            </TouchableOpacity>
    );
};

export default ChatListItem;

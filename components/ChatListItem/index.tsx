import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from "react-native";
import styles from "./style";
import {ChatRoom} from "../../types";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
import {Auth} from "aws-amplify";
export type ChatListItemProps = {
    chatRoom: ChatRoom;
}


const ChatListItem = (props: ChatListItemProps) => {

    const navigation = useNavigation();

    const { chatRoom } = props;
    const [otherUser, setOtherUser] = useState(null);

    // @ts-ignore
    const user = chatRoom.chatRoomUsers.items[0].user;

    useEffect(() => {
        const getOtherUser = async () => {
            // @ts-ignore
            const userInfo = await Auth.getAuthenticatedUser();

            // @ts-ignore
            if(chatRoom.chatRoomUsers.items[0].user.id === userInfo.attributes.sub) {
                // @ts-ignore
                setOtherUser(chatRoom.chatRoomUsers.items[1].user);
            } else {
                // @ts-ignore
                setOtherUser(chatRoom.chatRoomUsers.items[0].user);

            }

        }

        getOtherUser();
    }, []);

    const onClick = () => {
        //
        navigation.navigate("ChatRoom", {id: chatRoom.id, name: user.name });
    }

    return (
            <TouchableOpacity activeOpacity={0.8} onPress={onClick} >
                <View style={styles.container}>
                    <View style={styles.leftContainer}>
            {/*// @ts-ignore*/}
                        <Image source={{uri: user.imageUri }} style={styles.avatar} />

                        <View style={styles.midContainer}>
            {/*// @ts-ignore*/}
                            <Text style={styles.username}>{user.name}</Text>
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

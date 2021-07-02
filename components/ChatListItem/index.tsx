import React from 'react';
import {View, Text, Image, TouchableOpacity} from "react-native";
import styles from "./style";
import {ChatRoom} from "../../types";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
export type ChatListItemProps = {
    chatRoom: ChatRoom;
}


const ChatListItem = (props: ChatListItemProps) => {

    const navigation = useNavigation();

    const { chatRoom } = props;

    // @ts-ignore
    const user = chatRoom.users[1];

    const onClick = () => {
        //
        // @ts-ignore
        console.log("CLICKED 🚀", user.name);
        navigation.navigate("ChatRoom");
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
                            <Text numberOfLines={1} style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
                        </View>
                    </View>

            {/*// @ts-ignore*/}
                    <Text style={styles.time}>{moment(chatRoom.lastMessage.createdAt).format(" DD/MM/YYYY")}</Text>
                    {/*<Text style={styles.time}>Yesterday</Text>*/}
                </View>
            </TouchableOpacity>
    );
};

export default ChatListItem;

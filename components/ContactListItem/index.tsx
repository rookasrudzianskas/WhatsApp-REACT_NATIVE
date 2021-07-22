import React from 'react';
import {View, Text, Image, TouchableOpacity} from "react-native";
import styles from "./style";
import {ChatRoom, User} from "../../types";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
import {API, graphqlOperation} from "aws-amplify";
import {createChatRoom} from "../../src/graphql/mutations";

export type ContactListItemProps = {
    user: User;
}


const ContactListItem = (props: ContactListItemProps) => {

    const navigation = useNavigation();

    // @ts-ignore
    const { user } = props;

    // @ts-ignore
    // const user = chatRoom.users[1];

    const onClick = async () => {
        try {
            // 1. create a new Chat Room
            const newChatRoomData = await API.graphql(graphqlOperation(createChatRoom, {input: {}}));

            if(!newChatRoomData.data) {
                console.log("Failed to create chat room...");
                return;
            }

            const newChatRoom = newChatRoomData.data.createChatRoom;

            console.log(newChatRoomData);

            // 2. add user to the chat room

            // 3. add authenticated user to the chat room
        } catch (e) {
            console.log(e);
        }
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
    {/*// @ts-ignore*/}
                            <Text numberOfLines={2} style={styles.status}>{user.status}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
    );
};

export default ContactListItem;

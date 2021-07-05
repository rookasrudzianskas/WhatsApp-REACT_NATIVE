import React from 'react';
import {View, Text, Image, TouchableOpacity} from "react-native";
import styles from "./style";
import {ChatRoom, User} from "../../types";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
export type ContactListItemProps = {
    user: User;
}


const ContactListItem = (props: ContactListItemProps) => {

    const navigation = useNavigation();

    // @ts-ignore
    const { user } = props;

    // @ts-ignore
    // const user = chatRoom.users[1];

    const onClick = () => {
        //

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
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
    );
};

export default ContactListItem;

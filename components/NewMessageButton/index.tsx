import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import styles from "./styles";
import {useNavigation} from "@react-navigation/native";

const NewMessageButton = () => {

    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate("Contacts");
    }

    return (
        <TouchableOpacity  style={styles.container} onPress={onPress}>
            <View>
                <MaterialCommunityIcons name="message-reply-text" size={28} color="white" />
                <MaterialCommunityIcons name="message-reply-text" size={28} color="white" />
                <MaterialCommunityIcons name="message-reply-text" size={28} color="white" />
                <MaterialCommunityIcons name="message-reply-text" size={28} color="white" />
                <MaterialCommunityIcons name="message-reply-text" size={28} color="white" />
                <MaterialCommunityIcons name="message-reply-text" size={28} color="white" />
            </View>
        </TouchableOpacity>
    )
}

export default NewMessageButton;

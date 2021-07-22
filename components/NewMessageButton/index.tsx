import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import styles from "./styles";
import {useNavigation} from "@react-navigation/native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const NewMessageButton = () => {

    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate("Contacts");
    }

    return (
        <TouchableOpacity  style={styles.container} onPress={onPress}>
            <View>
                {/*<MaterialCommunityIcons name="message-reply-text" size={28} color="white" />*/}
                <Text>💁</Text>
            </View>
        </TouchableOpacity>
    )
}

export default NewMessageButton;

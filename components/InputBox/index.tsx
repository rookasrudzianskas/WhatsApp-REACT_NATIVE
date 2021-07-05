import React from 'react';
import styles from "./styles";
import {View, Text, TextInput} from "react-native";
import {MaterialCommunityIcons, FontAwesome5, Entypo, Fontisto} from "@expo/vector-icons";

const InputBox = () => {
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FontAwesome5 name="laugh-beam" size={24} color="grey" />
                <TextInput/>
                <Entypo name="attachment" size={24} color="grey" />
                <Fontisto name="camera" size={24} color="grey" />


            </View>

            <View style={styles.buttonContainer}>
                <MaterialCommunityIcons name="microphone" size={24} color="white" />
            </View>
        </View>
    );
}

export default InputBox;

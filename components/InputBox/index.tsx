import React from 'react';
import styles from "./styles";
import {View, Text} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const InputBox = () => {
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>

            </View>

            <View>
                <MaterialCommunityIcons name="microphone" size={24} color="white" />
            </View>
        </View>
    );
}

export default InputBox;

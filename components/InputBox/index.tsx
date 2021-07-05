import React, {useState} from 'react';
import styles from "./styles";
import {View, Text, TextInput, KeyboardAvoidingView} from "react-native";
import {MaterialCommunityIcons, FontAwesome5, Entypo, Fontisto} from "@expo/vector-icons";

const InputBox = () => {

    const [message, setMessage] = useState('');


    return (
        <KeyboardAvoidingView behavior="height" style={styles.container}>
            <View style={styles.mainContainer}>
                <FontAwesome5 name="laugh-beam" size={24} color="grey" />
                <TextInput value={message} onChangeText={(text) => setMessage(text)} style={styles.textInput} multiline/>
                <Entypo name="attachment" size={24} color="grey" style={styles.icon} />
                <Fontisto name="camera" size={24} color="grey" style={styles.icon}  />


            </View>

            <View style={styles.buttonContainer}>
                <MaterialCommunityIcons name="microphone" size={28} color="white" />
            </View>
        </KeyboardAvoidingView>
    );
}

export default InputBox;

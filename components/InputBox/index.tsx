import React, {useState} from 'react';
import styles from "./styles";
import {View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity} from "react-native";
import {MaterialCommunityIcons, FontAwesome5, Entypo, Fontisto, MaterialIcons} from "@expo/vector-icons";

const InputBox = () => {

    const [message, setMessage] = useState('');

    const onMicrophonePress = () => {
        console.log("MICROPHONE");
    }

    const onSendPress = () => {
        console.log("SENDING", message);

        setMessage("");
    }

    const onPress = () => {
        if(!message) {
            onMicrophonePress();
        } else {
            onSendPress();
        }
    }

    return (
        <KeyboardAvoidingView behavior="height" style={styles.container}>
            <View style={styles.mainContainer}>
                <FontAwesome5 name="laugh-beam" size={24} color="grey" />
                <TextInput placeholder="Type a message" value={message} onChangeText={(text) => setMessage(text)} style={styles.textInput} multiline/>
                <Entypo name="attachment" size={24} color="grey" style={styles.icon} />
                <Fontisto name="camera" size={24} color="grey" style={styles.icon}  />


            </View>

            <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
                {
                    !message ? (
                        <MaterialCommunityIcons name="microphone" size={28} color="white" />
                    ) : (
                        <MaterialIcons name="send" size={28} color={"white"} />
                    )
                }
            </TouchableOpacity>
        </KeyboardAvoidingView>

    );
}

export default InputBox;

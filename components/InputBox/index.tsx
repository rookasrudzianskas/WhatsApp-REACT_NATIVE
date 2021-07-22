import React, {useEffect, useState} from 'react';
import styles from "./styles";
import {View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity} from "react-native";
import {MaterialCommunityIcons, FontAwesome5, Entypo, Fontisto, MaterialIcons} from "@expo/vector-icons";
import {API, Auth, graphqlOperation} from "aws-amplify";
import {createMessage} from "../../src/graphql/mutations";

// @ts-ignore
const InputBox = (props) => {

    const {chatRoomID} = props;
    const [message, setMessage] = useState('');
    const [myUserID, setMyUserID] = useState(null);

    useEffect(() => {
        const fetchUser = async() => {
            const userInfo = await Auth.currentAuthenticatedUser();
            setMyUserID(userInfo.attributes.sub);
        }

        fetchUser();
    }, []);

    const onMicrophonePress = () => {
        console.log("MICROPHONE");
    }

    const onSendPress = async () => {

        try {
            await API.graphql(graphqlOperation(createMessage, {input: {content: message, userID: myUserID, chatRoomID: chatRoomID}}))
        } catch (e) {
            console.log(e);
        }

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
                <Text>🚀</Text>
                {/*<FontAwesome5 name="laugh-beam" size={24} color="grey" />*/}
                <TextInput placeholder="Type a message" value={message} onChangeText={(text) => setMessage(text)} style={styles.textInput} multiline/>
                {/*<Entypo name="attachment" size={24} color="grey" style={styles.icon} />*/}
                <Text>💌</Text>
                {/*<Fontisto name="camera" size={24} color="grey" style={styles.icon}  />*/}
                <Text>🎥</Text>

            </View>

            <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
                {
                    !message ? (
                        // <MaterialCommunityIcons name="microphone" size={28} color="white" />
                        <Text>🎤</Text>
                    ) : (
                        // <MaterialIcons name="send" size={28} color={"white"} />
                        <Text>✉️</Text>
                    )
                }
            </TouchableOpacity>
        </KeyboardAvoidingView>

    );
}

export default InputBox;

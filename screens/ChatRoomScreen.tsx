import React from 'react';
import {View, Text} from "react-native";
import {useRoute} from "@react-navigation/native";


const ChatRoomScreen = () => {

    const route = useRoute();
    console.log(route.params);

    return (
        <View>
            <Text>Chat Room Screen</Text>
        </View>
    );
};

export default ChatRoomScreen;

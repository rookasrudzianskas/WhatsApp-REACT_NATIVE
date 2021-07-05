import React from 'react';
import {View, Text, FlatList} from "react-native";
import {useRoute} from "@react-navigation/native";
import chatRoomData from "../data/Chats";
import ChatMessage from "../components/ChatMessage";

const ChatRoomScreen = () => {

    const route = useRoute();
    console.log("This is route params", route.params);

    return (
        <View>
            <FlatList data={chatRoomData.messages} renderItem={({item}) => <ChatMessage message={item}  /> } />
        </View>
    );
};

export default ChatRoomScreen;

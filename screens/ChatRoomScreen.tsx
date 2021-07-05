import React from 'react';
import {View, Text, FlatList, ImageBackground} from "react-native";
import {useRoute} from "@react-navigation/native";
import chatRoomData from "../data/Chats";
import ChatMessage from "../components/ChatMessage";
// @ts-ignore
import BG from "../assets/images/BG.png";


const ChatRoomScreen = () => {

    const route = useRoute();
    console.log("This is route params", route.params);

    return (
    // @ts-ignore
        <ImageBackground style={{ width: '100%', height: '100%' }} source={BG}>
    {/*// @ts-ignore*/}
            <FlatList data={chatRoomData.messages} renderItem={({item}) => <ChatMessage message={item}  /> } inverted />


        </ImageBackground>
    );
};

export default ChatRoomScreen;

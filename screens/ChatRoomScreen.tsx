import React, {useEffect} from 'react';
import {View, Text, FlatList, ImageBackground} from "react-native";
import {useRoute} from "@react-navigation/native";
import chatRoomData from "../data/Chats";
import ChatMessage from "../components/ChatMessage";
// @ts-ignore
import BG from "../assets/images/BG.png";
import InputBox from "../components/InputBox";


const ChatRoomScreen = () => {

    const route = useRoute();

    useEffect(() => {
        const fetchMessages = async() => {

        }
    }, []);

    // @ts-ignore
    return (
        <ImageBackground style={{ width: '100%', height: '100%' }} source={BG}>
    {/*// @ts-ignore*/}
            <FlatList data={chatRoomData.messages} renderItem={({item}) => <ChatMessage message={item}  /> } inverted />

    {/*// @ts-ignore*/}
            <InputBox chatRoomID={route.params.id} />
        </ImageBackground>
    );
};

export default ChatRoomScreen;

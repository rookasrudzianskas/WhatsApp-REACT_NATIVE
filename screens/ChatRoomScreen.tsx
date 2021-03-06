import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, ImageBackground} from "react-native";
import {useRoute} from "@react-navigation/native";
import ChatMessage from "../components/ChatMessage";
// @ts-ignore
import BG from "../assets/images/BG.png";
import InputBox from "../components/InputBox";
import {API, Auth, graphqlOperation} from "aws-amplify";
import {messagesByChatRoom} from "../src/graphql/queries";


const ChatRoomScreen = () => {

    const [messages, setMessages] = useState([]);
    const [myId, setMyId] = useState(null);

    const route = useRoute();

    useEffect(() => {
        const fetchMessages = async() => {
            const messageData = await API.graphql(graphqlOperation(messagesByChatRoom, {
            // @ts-ignore
                chatRoomID: route.params.id,
                sortDirection: "DESC",
            }))

            // @ts-ignore
            setMessages(messageData.data.messagesByChatRoom.items);

            fetchMessages();

            console.log(messageData);
        }
    }, []);

    useEffect(() => {
        const getMyId = async() => {
            const userInfo = Auth.currentAuthenticatedUser();
            // @ts-ignore
            setMyId(userInfo.attributes.sub);
        }
    }, []);

    // @ts-ignore
    return (
        <ImageBackground style={{ width: '100%', height: '100%' }} source={BG}>
    {/*// @ts-ignore*/}
            <FlatList data={messages} renderItem={({item}) => <ChatMessage myId={myId} message={item}  /> } inverted />

    {/*// @ts-ignore*/}
            <InputBox chatRoomID={route.params.id} />
        </ImageBackground>
    );
};

export default ChatRoomScreen;

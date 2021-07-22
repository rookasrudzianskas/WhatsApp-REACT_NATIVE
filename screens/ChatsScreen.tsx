import * as React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import ChatListItem from "../components/ChatListItem";
import chatRooms from "../data/ChatRooms";
import NewMessageButton from "../components/NewMessageButton";

import {useEffect, useState} from "react";
import {API, Auth, graphqlOperation} from "aws-amplify";
import {getUser} from "./queries";


export default function ChatsScreen() {

    const [chatRooms, setChatRooms] = useState([]);
    console.log("🚀", chatRooms);

    useEffect(() => {
        const fetchChatRooms = async () => {
            try {
                const userInfo = await Auth.currentAuthenticatedUser();

                   const userData = await API.graphql(graphqlOperation(getUser, {id: userInfo.attributes.sub}));
                   setChatRooms(userData.data.getUser.chatRoomUser.items);
                    console.log("THIS IS SUPER", userData);
            } catch (e) {
                console.log(e);
            }
        }

        fetchChatRooms();

    }, []);

    // useEffect(() => {
    //     const fetchChatRooms = async () => {
    //         try {
    //             const userInfo = await Auth.currentAuthenticatedUser();
    //
    //             const userData = await API.graphql(
    //                 graphqlOperation(
    //                     getUser, {
    //                         id: userInfo.attributes.sub,
    //                     }
    //                 )
    //             )
    //
    //             setChatRooms(userData.data.getUser.chatRoomUser.items)
    //         } catch (e) {
    //             console.log(e);
    //         }
    //     }
    //     fetchChatRooms();
    // }, []);

  return (
    <View style={styles.container}>
  {/*// @ts-ignore*/}
        <FlatList numberOfLines={2} style={{ width: "100%" }} data={chatRooms} renderItem={({item}) => <ChatListItem chatRoom={item} />} keyExtractor={(item) => item.id} />
        <NewMessageButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});

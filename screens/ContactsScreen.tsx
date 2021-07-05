import * as React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import ChatListItem from "../components/ChatListItem";
import chatRooms from "../data/ChatRooms";
import NewMessageButton from "../components/NewMessageButton";


export default function ContactsScreen() {
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

import * as React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import ChatListItem from "../components/ChatListItem";
import chatRooms from "../data/ChatRooms";
import NewMessageButton from "../components/NewMessageButton";
import users from "../data/Users";
import ContactListItem from "../components/ContactListItem";
import {useEffect} from "react";
import {API, graphqlOperation} from 'aws-amplify';
import {listUsers} from "../src/graphql/queries";

export default function ContactsScreen() {


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const userData = await API.graphql(graphqlOperation(listUsers));
            } catch (e) {

            }
        }
    }, []);
    return (
        <View style={styles.container}>
            {/*// @ts-ignore*/}
            <FlatList numberOfLines={2} style={{ width: "100%" }} data={users} renderItem={({item}) => <ContactListItem user={item} />} keyExtractor={(item) => item.id} />
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

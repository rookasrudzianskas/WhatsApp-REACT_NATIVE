import * as React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import ChatListItem from "../components/ChatListItem";
import chatRooms from "../data/ChatRooms";
import NewMessageButton from "../components/NewMessageButton";
import ContactListItem from "../components/ContactListItem";
import {useEffect, useState} from "react";
import {API, graphqlOperation} from 'aws-amplify';
import {listUsers} from "../src/graphql/queries";

export default function ContactsScreen() {

    const [users, setUsers] = useState([]);


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const userData = await API.graphql(graphqlOperation(listUsers));
                // @ts-ignore
                setUsers(userData.data.getUsers.items);
            } catch (e) {
                console.log(e);
            }
        }

        fetchUsers();
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

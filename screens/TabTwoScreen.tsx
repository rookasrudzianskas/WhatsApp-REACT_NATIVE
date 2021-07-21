import * as React from 'react';
import { StyleSheet} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import {TouchableOpacity} from "react-native";
import { Auth } from 'aws-amplify';




export default function TabTwoScreen() {

  async function signOut() {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={signOut}>
        <Text>Sign Out 🚀</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

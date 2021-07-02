import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import {ColorSchemeName, View} from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import MainTabNavigator from './MainTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import Colors from "../constants/Colors";
import { Entypo } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import ChatRoomScreen from "../screens/ChatRoomScreen";

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: Colors.light.tint,
            shadowOpacity: 0,
            elevation: 0,
        },
        headerTintColor: Colors.light.background,
        headerTitleAlign: "left",
        headerTitleStyle: {
            fontWeight: "bold",
        }
        }}>
      <Stack.Screen name="Root" component={MainTabNavigator} options={{ title: "Whatsapp", headerRight: () => (
        <View style={{ flexDirection: "row", width: 60, justifyContent: "space-between", marginRight: 10}}>
            <Octicons name="search" size={22} color="white" />
            <Entypo name="dots-three-vertical" size={22} color="white" />
        </View>
          )
      }} />
      <Stack.Screen name="Chat Room" component={ChatRoomScreen} options={{ title: 'Chat Room' }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}

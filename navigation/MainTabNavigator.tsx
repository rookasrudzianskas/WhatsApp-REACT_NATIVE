import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { MainTabParamList, TabOneParamList, TabTwoParamList } from '../types';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const MainTab = createMaterialTopTabNavigator<MainTabParamList>();

export default function MainTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <MainTab.Navigator
      initialRouteName="Chats"
      tabBarOptions={{
          activeTintColor: Colors[colorScheme].background,
          style: {
              backgroundColor: Colors[colorScheme].tint,
          },
          indicatorStyle: {
              backgroundColor: Colors[colorScheme].background,
              height: 4,
          },
          labelStyle: {
              fontWeight: "bold",
          }


      }}>
      <MainTab.Screen
        name="Camera"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <MainTab.Screen
        name="Chats"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />

        <MainTab.Screen
            name="Status"
            component={TabTwoNavigator}
            options={{
                tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
            }}
        />

        <MainTab.Screen
            name="Calls"
            component={TabTwoNavigator}
            options={{
                tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
            }}
        />

    </MainTab.Navigator>
  );
}

function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{headerShown: false}}
      />

    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{headerShown: false}}

      />
    </TabTwoStack.Navigator>
  );
}

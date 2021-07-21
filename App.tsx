import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import Amplify, {Auth, API, graphqlOperation} from 'aws-amplify';
import config from './aws-exports';

Amplify.configure(config);

// @ts-ignore
import { withAuthenticator, AmplifySignOut } from 'aws-amplify-react-native';
import {getUser} from "./src/graphql/queries";


function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  useEffect(() => {
    // run this code then the application loads
    const fetchUser = async () => {
      // get authenticated user from auth

      const userInfo = await Auth.currentAuthenticatedUser({bypassCache: true});
      console.log(userInfo);

      if(userInfo) {
      // get the user from backend with the user ID from AUth
        const userData = await API.graphql(graphqlOperation(getUser, {id: userInfo.attributes.sub}));
        console.log(userData);



      // if there is no user in DB with the id then create one

      }

    }

    fetchUser();

  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (

      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

export default withAuthenticator(App);

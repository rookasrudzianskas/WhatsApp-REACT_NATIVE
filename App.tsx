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
import {createUser} from "./src/graphql/mutations";


function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const randomImages = [
    'http://www.svietimonaujienos.lt/wp-content/uploads/2019/12/Rokas-e1575467263326.jpg',
    'https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg',
      'https://about.me/cdn-cgi/image/q=80,dpr=1,f=auto,fit=cover,w=1200,h=630,gravity=0.474x0.27/https://assets.about.me/background/users/r/o/o/rookas_1585854606_159.jpg',
      'https://media-exp1.licdn.com/dms/image/C5603AQEahjJN7XNNzQ/profile-displayphoto-shrink_200_200/0/1564395175253?e=1630540800&v=beta&t=_ovs8knTWHpNGphdoozlQL8dwh4E4dzh0ZvJfby2voM',

  ]

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

        // @ts-ignore
        if(userData.data.getUser) {
          console.log("User is already registered in the database");
          return;
        }

        const getRandomImage = () => {
          return randomImages[Math.floor(Math.random() * randomImages.length)];
        }

        const newUser = {
          id: userInfo.attributes.sub,
          name: userInfo.username,
          imageUri: getRandomImage(),
          status: "Hey, I am using Whatsapp",
        }

        await API.graphql(
            graphqlOperation(createUser, {input: newUser})
        )



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

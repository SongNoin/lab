import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import {ApolloProvider} from '@apollo/client';
import {client} from './src/apollo/client';
import RegisterScreen from './screens/RegisterScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          {/* <Stack.Screen name="Register" component={RegisterScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}

export default App;

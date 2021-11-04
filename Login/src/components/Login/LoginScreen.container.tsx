import * as React from 'react';
import LoginScreenPageUI from './LoginScreen.presenter';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useNavigation} from '@react-navigation/native';

// GoogleSignin.configure({
//   scopes: ['https://www.googleapis.com/auth/drive.readonly'],
//   webClientId:
//     '993563276918-3pb25ukfpkt38qmn6cal0sp9uimq2gf6.apps.googleusercontent.com',
//   offlineAccess: true,
//   forceCodeForRefreshToken: true,
// });

export default function LoginScreenPage(props) {
  const navigation = useNavigation();
  

  React.useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      webClientId:
        '993563276918-3pb25ukfpkt38qmn6cal0sp9uimq2gf6.apps.googleusercontent.com',
      offlineAccess: true,
      forceCodeForRefreshToken: true,
    });
  }, []);

  // eslint-disable-next-line no-unused-vars
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const { idToken } = await GoogleSignin.signIn();
      // const userInfo = await GoogleSignin.signIn();
      console.log("idToken",idToken)
      // console.log({userInfo});
    } catch (error:any) {
      // eslint-disable-next-line no-alert 
      alert(error.message);
    }
  };

  function onPressRegister() {
    navigation.navigate('Register');
  }

  return (
    <LoginScreenPageUI signIn={signIn} onPressRegister={onPressRegister} />
  );
}


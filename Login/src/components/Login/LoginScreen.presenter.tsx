import * as React from 'react';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
import {
  Wrapper,
  Email,
  Password,
  LoginButton,
  ButtonText,
  RegisterButton,
} from './LoginScreen.styles';

export default function LoginScreenPageUI(props) {
  return (
    <Wrapper>
      <Email placeholder="Email" />
      <Password placeholder="Password" secureTextEntry />
      
      <LoginButton>
        <ButtonText>Login</ButtonText>
      </LoginButton>

      <RegisterButton onPress={props.onPressRegister}>
        <ButtonText>Register</ButtonText>
      </RegisterButton>

      <RegisterButton onPress={props.signIn}>
        <ButtonText>Google Login</ButtonText>
      </RegisterButton>

    </Wrapper>
  );
}

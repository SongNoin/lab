 import * as React from 'react';
import { Text } from 'react-native';
import {Wrapper, Email, Password, Name, PasswordCheck,
    ButtonText,
    RegisterButton,} from "./Register.styles"

export default function RegisterPageUI(props) {
    return (
        <Wrapper>
            <Text 
                style={{
                    fontWeight: 'bold' , 
                    fontSize: 20, 
                    marginBottom: 30 
                }}
            >Register</Text>

            <Email 
                placeholder="Email" 
                onChangeText={props.onChangeEmail} 
            />

            <Name 
                placeholder="Name" 
                onChangeText={props.onChangeName} 
            />

            <Password 
                placeholder="Password" 
                secureTextEntry 
                onChangeText={props.onChangePassword} 
            />

            <PasswordCheck 
                placeholder="PasswordCheck" 
                secureTextEntry 
                onChangeText={props.onChangePasswordCheck} 
            />

            <RegisterButton onPress={props.onPressButton}>
                <ButtonText>Register</ButtonText>
            </RegisterButton>
            
        </Wrapper>
    )
}
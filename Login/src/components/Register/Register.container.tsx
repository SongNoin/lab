import { useMutation } from '@apollo/client';
import * as React from 'react';
import RegisterPageUI from "./Register.presenter";
import {CREATE_USER} from "./Register.queries"

export default function RegisterPage() {
    // * UseState
    const [email , setEmail] = React.useState("")
    const [name ,setName] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [passwordCheck, setPasswordCheck] = React.useState("")
    // * ########################################
    const [createUser] = useMutation(CREATE_USER)

    function onChangeEmail(event) {
        setEmail(event)
        // console.log(email)
    }

    function onChangeName(event) {
        setName(event)
        // console.log(name)
    }

    function onChangePassword(event) {
        setPassword(event)
        // console.log(password)
    }

    function onChangePasswordCheck(event) {
        setPasswordCheck(event)
        // console.log(passwordCheck)
    }

    async function onPressButton() {
        // console.log(email , name , password , passwordCheck)
        try {
            const result = await createUser({
                variables: {
                    createUserInput: {
                        email,
                        password,
                        name
                    }
                }
            })
            console.log(result.data.createUser.email)
        } catch(error:any) {
            alert(error.message)
        }
    }

    return <RegisterPageUI 
        onChangeEmail={onChangeEmail} 
        onChangeName={onChangeName} 
        onChangePassword={onChangePassword} 
        onChangePasswordCheck={onChangePasswordCheck}
        onPressButton={onPressButton}
    />
}
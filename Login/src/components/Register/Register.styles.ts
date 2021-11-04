import styled from "@emotion/native"

export const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: center;
`;

export const Password = styled.TextInput`
  border: 1px solid red;
  width: 60%;
  margin-bottom: 20px;
  padding-left: 15px;
  border-radius: 10px;
`;

export const PasswordCheck = styled.TextInput`
  border: 1px solid red;
  width: 60%;
  margin-bottom: 20px;
  padding-left: 15px;
  border-radius: 10px;
`;

export const Email = styled.TextInput`
  border: 1px solid red;
  width: 60%;
  margin-bottom: 20px;
  padding-left: 15px;
  border-radius: 10px;
`;

export const Name = styled.TextInput`
  border: 1px solid red;
  width: 60%;
  margin-bottom: 20px;
  padding-left: 15px;
  border-radius: 10px;
`;

export const RegisterButton = styled.TouchableOpacity`
  background-color: #0782f9;
  width: 60%;
  height: 50px;
  padding: 15px;
  border-radius: 10px;
  align-items: center;
  margin-bottom: 10px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-weight: 700;
  font-size: 16px;
`;
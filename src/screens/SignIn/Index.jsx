import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, Text, Touchable } from 'react-native';
import logo from './../../../assets/eggi-logo.png'; 
import { NativeBaseProvider, Button, Pressable, View } from 'native-base';
import {
  Container,
  Logo,
  Header,
  InputText,
  Registre,
} from './styles';

export default function App({ navigation }) {
  return (
    <NativeBaseProvider>
      <StatusBar style="auto" />
      <Container>

        <Logo>
          <Image source={logo} style={{
            width: '100%',
            height: 30,
            resizeMode: 'contain',
          }} /> 
        </Logo>

        <Header size="lg">Crie uma conta para você</Header>
        
        <InputText width="full" size="xl" placeholder="Email" />
        <InputText width="full" size="xl" placeholder="Senha" />
        <Button size="50" backgroundColor="green.600" width="full" onPress={() => {
          navigation.navigate('Home')
        }}>Entrar</Button>

        <Registre fontSize="lg" bold color="gray.400">Não tem uma conta? <Text>registre-se</Text></Registre>
      </Container>
    </NativeBaseProvider>
  );
}

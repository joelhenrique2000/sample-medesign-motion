import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image } from 'react-native';
import logo from './../../../assets/eggi-logo.png'; 
import { NativeBaseProvider, Button } from 'native-base';
import {
  Container,
  Logo,
  Header,
  InputText,
  Registre,
} from './styles';

export default function App() {
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
        <InputText width="full" size="xl" placeholder="Confirme sua senha" />
        <Button size="50" backgroundColor="green.600" width="full">Cadastrar</Button>

        <Registre fontSize="lg" bold color="gray.400">Já tem uma conta? entre</Registre>
      </Container>
    </NativeBaseProvider>
  );
}

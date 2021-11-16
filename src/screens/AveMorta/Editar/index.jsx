import React from 'react';
import {  Button, ScrollView, FormControl } from 'native-base';
import { Container, Item,
  InputText, } from './styles';
import { Header } from '../../../components/Header';

export default function EditarAveMorta({ navigation }) {
  return (
    <>
      <Header
        title="Editar ave morta"
        onPress={() => {
          navigation.goBack()
        }}
      />
      <Container>
        <ScrollView>
          <FormControl.Label>Quantidade</FormControl.Label>
          <InputText width="full" size="xl" placeholder="Quantidade" />

          <FormControl.Label>Data</FormControl.Label>
          <InputText width="full" size="xl" placeholder="Data" />

          <FormControl.Label>Incubadora</FormControl.Label>
          <InputText width="full" size="xl" placeholder="Incubadora" />

          <FormControl.Label>Temperatura</FormControl.Label>
          <InputText width="full" size="xl" placeholder="Temperatura" />

          <Button
            size="50"
            backgroundColor="green.600"
            width="full"
            onPress={() => {
              navigation.navigate('ListarAveMorta')
            }}
          >
            Concluir edição
          </Button>
        </ScrollView>
      </Container>
    </>
  );
}

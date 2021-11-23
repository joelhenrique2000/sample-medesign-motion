import React from 'react';
import {  Button, ScrollView, FormControl } from 'native-base';
import { Container, Item,
  InputText, } from './styles';
import { Header } from '../../../components/Header';
import { useForm, Controller } from 'react-hook-form'
import { Text } from 'react-native';
import { inserir } from '../../../services/ovoQuebrado';

export default function CriarOvoQuebrado({ navigation }) {

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      quantidade: '',
      incubadora: '',
      temperatura: '',
    }
  });

  const onSubmit = ({
    quantidade,
    incubadora,
    temperatura
  }) => {
    inserir({
      quantidade: parseInt(quantidade),
      incubadora,
      temperatura: parseFloat(temperatura)
    })
      .then(response => {
        if (response.status === 201) {
          navigation.navigate('ListarOvoQuebrado')
        } else {
          throw new Error('Error' + response.status);
        }
      })
      .catch(err => console.error('Ops! aconteceu algo inesperado. ' + err))
  };

  return (
    <>
      <Header
        title="Cadastrar ovo quebrado"
        onPress={() => {
          navigation.goBack()
        }}
      />
      <Container>
        <ScrollView>
        <FormControl.Label>Quantidade</FormControl.Label>
          <Controller
            control={control}
            rules={{
            required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputText
                width="full"
                size="xl"
                placeholder="Quantidade"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="quantidade"
          />
          {errors.quantidade && <Text>Este campo é obrigatório.</Text>}

          <FormControl.Label>Incubadora</FormControl.Label>
          <Controller
            control={control}
            rules={{
            required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputText
                width="full"
                size="xl"
                placeholder="Incubadora"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="incubadora"
          />
          {errors.incubadora && <Text>Este campo é obrigatório.</Text>}

          <FormControl.Label>Temperatura</FormControl.Label>
          <Controller
            control={control}
            rules={{
            required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputText
                width="full"
                size="xl"
                placeholder="Temperatura"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="temperatura"
          />
          {errors.temperatura && <Text>Este campo é obrigatório.</Text>}

          <Button
            size="50"
            backgroundColor="green.600"
            width="full"
            onPress={handleSubmit(onSubmit)}
          >
            Cadastrar ovo quebrado
          </Button>
        </ScrollView>
      </Container>
    </>
  );
}

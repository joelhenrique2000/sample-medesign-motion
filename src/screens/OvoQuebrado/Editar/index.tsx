import React, { useEffect } from 'react';
import {  Button, ScrollView, FormControl } from 'native-base';
import { Container, Item,
  InputText, } from './styles';
import { Header } from '../../../components/Header';
import { atualizarPorId, obterPorId, removerPorId } from '../../../services/ovoQuebrado';
import { Controller, useForm } from 'react-hook-form';
import { Text } from 'react-native';
import { format } from 'date-fns'

interface IOvoQuebrado {
  id: string;
  incubadora: string;
  temperatura: number;
  quantidade: number;
  createdAt: Date;
}

interface IOvoQuebradoAtualizar {
  incubadora: string;
  temperatura: string;
  quantidade: string;
}


export default function EditarOvoQuebrado({ navigation, route }) {

  const { id } = route.params;

  const { control, handleSubmit, setValue, formState: { errors } } = useForm({
    defaultValues: {
      id: '',
      quantidade: '',
      incubadora: '',
      temperatura: '',
      createdAt: ''
    }
  });

  useEffect(() => {
    obterPorId(id, {})
      .then(response => {
        const {
          id,
          incubadora,
          quantidade,
          temperatura,
          createdAt
        }: IOvoQuebrado = response.data;

        setValue('id', id);
        setValue('incubadora', incubadora);
        setValue('quantidade', quantidade.toString());
        setValue('temperatura', temperatura.toString());
        setValue('createdAt', format(new Date(createdAt), "dd/MM/yyyy 'às' hh:mm"));
      })
      .catch(err => console.error('Ops! aconteceu algo inesperado. ' + err))
  }, [])

  const onSubmit = ({
    quantidade,
    incubadora,
    temperatura
  }: IOvoQuebradoAtualizar) => {
    atualizarPorId(id, {
      quantidade: parseInt(quantidade),
      incubadora,
      temperatura: parseFloat(temperatura)
    })
      .then(response => {
        if (response.status === 200) {
          navigation.navigate('ListarOvoQuebrado')
        } else {
          throw new Error('Error' + response.status);
        }
      })
      .catch(err => console.error('Ops! aconteceu algo inesperado. ' + err))
  };

  const onDelete = (id: string) => {
    removerPorId(id)
      .then(response => {
        if (response.status === 200) {
          navigation.navigate('ListarOvoQuebrado')
        } else {
          throw new Error('Error' + response.status);
        }
      })
      .catch(err => console.error('Ops! aconteceu algo inesperado. ' + err))
  }
  
  return (
    <>
      <Header
        title="Editar ovo quebrado"
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
                  keyboardType="decimal-pad"
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
                  keyboardType="decimal-pad"
                  placeholder="Temperatura"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="temperatura"
            />
            {errors.temperatura && <Text>Este campo é obrigatório.</Text>}

            <FormControl.Label>Data</FormControl.Label>
            <Controller
              control={control}
              rules={{
              required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <InputText
                  width="full"
                  size="xl"
                  placeholder="Data"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  editable={false} 
                  selectTextOnFocus={false}
                  value={value}
                />
              )}
              name="createdAt"
            />
            {errors.createdAt && <Text>Este campo é obrigatório.</Text>}

            <Button
              size="50"
              backgroundColor="green.600"
              width="full"
              onPress={handleSubmit(onSubmit)}
            >
              Concluir edição
            </Button>

            <Button
              size="50"
              backgroundColor="red.600"
              width="full"
              onPress={() => onDelete(id)}
            >
              remover
            </Button>
        </ScrollView>
      </Container>
    </>
  );
}

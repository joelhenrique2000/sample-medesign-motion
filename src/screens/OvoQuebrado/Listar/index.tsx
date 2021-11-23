import React, { useEffect, useState } from 'react';
import { Button, View } from 'native-base';
import { Container, Item } from './styles';
import { Header } from '../../../components/Header';
import { obterTudo } from '../../../services/ovoQuebrado';
import { FlatList, RefreshControl } from 'react-native';

interface IOvoQuebrado {
  _id: string;
  incubadora: string;
  temperatura: number;
  quantidade: number;
  createdAt: Date;
}

export default function ListaOvoQuebrado({ navigation }) {

  const [ovosQuebrados, setOvosQuebrados] = useState<IOvoQuebrado[]>([]);
  const [refreshing, setRefreshing] = React.useState(false);

  const carregarDados = () => {
    obterTudo({})
      .then(response => setOvosQuebrados(response.data))
      .catch(err => console.error('Ops! aconteceu algo inesperado. ' + err))
  }

  useEffect(() => {
    carregarDados()
  }, [])

  return (
    <>
      <Header
        title="Ovos quebrados"
        onPress={() => {
          navigation.goBack()
        }}
      />
      <Container>
        <View style={{
          margin: 32,
          marginTop: 16,
          marginBottom: 16,
        }}>
          <Button backgroundColor="green.600" onPress={() => navigation.navigate("CriarOvoQuebrado")}>Cadastrar ovo quebrado</Button>
        </View>
        <FlatList
            data={ovosQuebrados}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={carregarDados}
              />
            }
            keyExtractor={( item ) => item._id}
            renderItem={({ item }) => {
              return (
                <Item
                  id={item._id}
                  title={`${item.quantidade} ovo(s) quebrado(s)`}
                  date={item.createdAt}
                  onPress={() => {
                    navigation.navigate('EditarOvoQuebrado', {
                      id: item._id
                    })
                  }}
                />
              );
            }}
        />
      </Container>
    </>
  );
}

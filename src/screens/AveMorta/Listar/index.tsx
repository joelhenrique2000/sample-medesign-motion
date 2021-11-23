import React, { useEffect, useState } from 'react';
import { Button } from 'native-base';
import { Container, Item } from './styles';
import { Header } from '../../../components/Header';
import { List } from '../../../components/List';
import { FlatList, RefreshControl, View } from 'react-native';
import { obterTudo } from '../../../services/aveMorta';

interface IAveMorta {
  _id: string;
  incubadora: string;
  temperatura: number;
  quantidade: number;
  createdAt: Date;
}

export default function ListarAveMorta({ navigation }) {

  const [avesMortas, setAvesMortas] = useState<IAveMorta[]>([]);
  const [refreshing, setRefreshing] = React.useState(false);

  const carregarDados = () => {
    obterTudo({})
      .then(response => setAvesMortas(response.data))
      .catch(err => console.error('Ops! aconteceu algo inesperado. ' + err))
  }

  useEffect(() => {
    carregarDados()
  }, [])

  return (
    <>
      <Header
        title="Aves mortas"
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
          <Button backgroundColor="green.600" onPress={() => navigation.navigate("CriarAveMorta")}>Cadastrar ave morta</Button>
        </View>
        <FlatList
            data={avesMortas}
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
                    navigation.navigate('EditarAveMorta', {
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

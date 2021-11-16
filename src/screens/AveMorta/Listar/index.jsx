import React from 'react';
import { Fab, Icon, Box, Button } from 'native-base';
import { Container, Item } from './styles';
import { Header } from '../../../components/Header';
import { List } from '../../../components/List';
import { AntDesign } from '@expo/vector-icons';
import { View } from 'react-native';

const data = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "adasdasdas",
    data: "01/01/2022"
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "adasdasdas",
    data: "01/01/2022"
  },
  {
    id: "58694a0f-3da1-471f-bd96-146786786786785571e29d72",
    title: "adasdasdas",
    data: "01/01/2022"
  },
  {
    id: "6869678678674a0f-3da1-431f-bd5866786-142371e29d72",
    title: "adasdasdas",
    data: "01/01/2022"
  },
  {
    id: "2866786784a0f-3da1-471f-bd96678678-142456e29d72",
    title: "adasdasdas",
    data: "01/01/2022"
  },
  {
    id: "bd7acbea-678678c1b1-46c2-a2d6786785-3ad53abb28ba",
    title: "adasdasdas",
    data: "01/01/2022"
  },
  {
    id: "3ac68a867867fc-c605-48d3-44f8-8678678fbd91aa97f63",
    title: "adasdasdas",
    data: "01/01/2022"
  },
  {
    id: "58694a8678673f-3da1-471f-bd86786796-145571e29d72",
    title: "adasdasdas",
    data: "01/01/2022"
  },
  {
    id: "68634a0f-3da1-431f-bd6786786756-142331e29d72",
    title: "adasdasdas",
    data: "01/01/2022"
  },
  {
    id: "2869466f-86786786783da1-471f-bd96-142456e29d72",
    title: "adasdasdas",
    data: "01/01/2022"
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3a867867867867d53abb28ba",
    title: "adasdasdas",
    data: "01/01/2022"
  },
  {
    id: "3ac68af867867867c-c605-48d3-a4f8-fbd91aa97f63",
    title: "adasdasdas",
    data: "01/01/2022"
  },
  {
    id: "58694a0f-367867867da1-471f-bd96-145571e29d72",
    title: "adasdasdas",
    data: "01/01/2022"
  },
  {
    id: "68694a0f-3da1-431f-bd56-186786786767842371e29d72",
    title: "adasdasdas",
    data: "01/01/2022"
  },
  {
    id: "28694a0f-3da1-867867867471f-bd96-142456e29d72",
    title: "adasdasdas",
    data: "01/01/2022"
  },
  {
    id: "bd7acbea-c1b1-46c2-a2d678678678675-3ad53abb28ba",
    title: "adasdasdas",
    data: "01/01/2022"
  },
  {
    id: "3ac68a67867867fc-c605-48d3-44f8-fbd91aa97f63",
    title: "adasdasdas",
    data: "01/01/2022"
  },
  {
    id: "58694a3f-3da1-467867867871f-bd96-145571e29d72",
    title: "adasdasdas",
    data: "01/01/2022"
  },
  {
    id: "68634a0f-3da1-431f-bd568678678-142331e29d72",
    title: "adasdasdas",
    data: "01/01/2022"
  },
  {
    id: "2869466f-3d67867867a1-471f-bd96-142456e29d72",
    title: "adasdasdas",
    data: "01/01/2022"
  },
  {
    id: "bd7acbea-c1b18678678678-46c2-aed5-3ad53abb28ba",
    title: "adasdasdas",
    data: "01/01/2022"
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-67867867fbd91aa97f63",
    title: "adasdasdas",
    data: "01/01/2022"
  },
  {
    id: "58694a0f-3da1-471678678f-bd96-145571e29d72",
    title: "adasdasdas",
    data: "01/01/2022"
  },
  {
    id: "68694a0f678678-3da1-431f-bd56-142371e29d72",
    title: "adasdasdas",
    data: "01/01/2022"
  },
  {
    id: "28694a86780f-3da1-47167867f-bd96-142456e29d72",
    title: "adasdasdas",
    data: "01/01/2022"
  },
  {
    id: "bd7acbea-c1b1-46c2-a2d6786785-3ad53abb28ba",
    title: "adasdasdas",
    data: "01/01/2022"
  },
  {
    id: "3ac68afc-678678c605-48d3-44f8-fbd91aa97f63",
    title: "adasdasdas",
    data: "01/01/2022"
  },
  {
    id: "58694a3f-3da1-471f-bd96-1486785571e29d72",
    title: "adasdasdas",
    data: "01/01/2022"
  },
  {
    id: "68634a0f-3da1-43678678671f-bd56-142331e29d72",
    title: "adasdasdas",
    data: "01/01/2022"
  },
  {
    id: "2869466f-3da1-471f-678678bd96-142456e29d72",
    title: "adasdasdas",
    data: "01/01/2022"
  },
  {
    id: "bd7acbea-c1b1-46678678c2-aed5-3ad53abb28ba",
    title: "adasdasdas",
    data: "01/01/2022"
  },
  {
    id: "3ac686786788afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "adasdasdas",
    data: "01/01/2022"
  },
  {
    id: "58694a0f-3da1-471f-bd96-1467867867571e29d72",
    title: "adasdasdas",
    data: "01/01/2022"
  },
  {
    id: "68694a0f-3da1-431f-bd56786786-142371e29d72",
    title: "adasdasdas",
    data: "01/01/2022"
  },
  {
    id: "28694a0678678f-3da1-471f-bd96-142456e29d72",
    title: "adasdasdas",
    data: "01/01/2022"
  },
  {
    id: "bd7acbea-c1b1-67867846c2-a2d5-3ad53abb28ba",
    title: "adasdasdas",
    data: "01/01/2022"
  },
  {
    id: "3ac68a543fc-c605-4876867d3-44f8-fbd91aa97f63",
    title: "adasdasdas",
    data: "01/01/2022"
  },
  {
    id: "58634594a3f-3da1345-471f-bd96-145571e29d72",
    title: "adasdasdas",
    data: "01/01/2022"
  },
  {
    id: "68634a3450f-3da1-431f-bd56-142331e29d72",
    title: "adasdasdas",
    data: "01/01/2022"
  },
  {
    id: "2869466345f-3da1-471f-bd96-142456e29d72",
    title: "adasdasdas",
    data: "01/01/2022"
  },
]

export default function ListarAveMorta({ navigation }) {
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
        <List
          data={data}
          keyExtractor={list => list.id}
          renderItem={({ item }) => {
            return (
              <Item
                id={item.id}
                title={item.title}
                date={item.data}
                onPress={() => {
                  navigation.navigate('EditarAveMorta', {
                    id: item.id
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

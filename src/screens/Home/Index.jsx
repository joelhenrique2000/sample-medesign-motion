import React from 'react';
import { Image, Platform, StatusBar, TouchableNativeFeedback } from 'react-native';
import ovoQuebrado from './../../../assets/ovo-quebrado.png'; 
import coracao from './../../../assets/coracao.png'; 
import {
  Container,
} from './styles';
import { ItemDashboard } from '../../components/ItemDashboard';
import { HeaderDashboard } from '../../components/HeaderDashboard';

export default function App({ navigation }) {
  return (
    <>
      <HeaderDashboard
        title="Boa noite"
        subtitle="Joel Henrique"
        onPress={() => {

        }}
      />
      <Container>
        <ItemDashboard
          icon={ovoQuebrado}
          title="43 ovos quebrados"
          subtitle="20 a mais que ontem"
          onPress={() => {
            navigation.navigate('ListarOvoQuebrado')
          }}
        />
        <ItemDashboard
          icon={coracao}
          title="12 aves mortas"
          subtitle="3 a mais que ontem"
          onPress={() => {
            navigation.navigate('ListarAveMorta')
          }}
        />
      </Container>
    </>
  );
}

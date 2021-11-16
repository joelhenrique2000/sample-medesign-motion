import React from 'react';
import { View, TouchableNativeFeedback, Pressable } from "react-native";
import { Container, ContainerPresentation } from './styles';
import { Text } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default ({
    title,
    onPress
}) => {
    return (
        <Container>
            <Pressable
            onPress={onPress} 
            style={{
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'center',
            }}
                android_ripple={{color: '#CFD4D9', borderless: true}}>
                <MaterialCommunityIcons size={24} name="arrow-left" color="#200E32" />
            </Pressable>

            <ContainerPresentation>
              <Text textAlign="center" fontSize="xl">{title}</Text>
            </ContainerPresentation>
          </Container>
      );
}
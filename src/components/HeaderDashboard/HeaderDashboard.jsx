import React from 'react';
import { View, TouchableNativeFeedback, Pressable } from "react-native";
import { Container, ContainerPresentation } from './styles';
import { Text } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';

export default ({
    icon,
    title,
    subtitle,
    onPress
}) => {
    return (
        <Container>
            <ContainerPresentation>
              <Text color="gray.400" fontSize="md">{title}</Text>
              <Text bold fontSize="xl">{subtitle}</Text>
            </ContainerPresentation>
    
            <Pressable
            style={{
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'center',
            }}
                android_ripple={{color: '#CFD4D9', borderless: true}}>
                <FontAwesome style={{

                }} size={24} name="user-o" color="#001833"></FontAwesome>
            </Pressable>
          </Container>
      );
}
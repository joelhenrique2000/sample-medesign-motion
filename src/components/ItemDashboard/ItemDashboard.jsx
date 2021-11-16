import React from 'react';
import { View, TouchableNativeFeedback } from "react-native";
import { Container, ContainerIcon, Icon } from './styles';
import { Text } from 'native-base';

export default ({
    icon,
    title,
    subtitle,
    onPress
}) => {
    return (
        <TouchableNativeFeedback onPress={onPress}>
            <Container>
                <ContainerIcon>
                    <Icon source={icon} /> 
                </ContainerIcon>
                <View>
                    <Text bold>{title}</Text>
                    <Text>{subtitle}</Text>
                </View>
            </Container>
        </TouchableNativeFeedback>
      );
}
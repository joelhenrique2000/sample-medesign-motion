import React from 'react';
import { View, TouchableNativeFeedback, Pressable } from "react-native";
import { Container, ContainerPresentation } from './styles';
import { FlatList, Text } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default ({ date, title, onPress, ...props }) => {
    return (
        <TouchableNativeFeedback onPress={onPress} {...props}>
            <Container>
                <Text bold fontSize="xl">{title}</Text>
                <Text>{date}</Text>
            </Container>
        </TouchableNativeFeedback>
    );
};
import React from 'react';
import { View, TouchableNativeFeedback, Pressable } from "react-native";
import { Container, ContainerPresentation } from './styles';
import { FlatList, Text } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ItemList } from '../ItemList';

List = ({
    data,
    keyExtractor,
    renderItem
}) => {
    return (
        <FlatList
            data={data}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
        />
    );
};

export default List;
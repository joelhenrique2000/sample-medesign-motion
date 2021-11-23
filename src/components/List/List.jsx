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
    console.log(data)
    return (
        <FlatList
            data={data}
            keyExtractor={({ item }) => data.id}
            renderItem={({ item }) => renderItem(item)}
        />
    );
};

export default List;
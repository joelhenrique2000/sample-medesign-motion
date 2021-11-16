import styled from 'styled-components/native';
import { StatusBar } from "react-native";

export const Container = styled.View`
    background-color: #F2FEF8;
    padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight + 20 : 20}px;
    padding-bottom: 20px;
    padding-left: 32px;
    padding-right: 32px;
    display: flex;
    flex-direction: row;
`;

export const ContainerPresentation = styled.View`
    flex-grow: 1;
    margin-right: 16px;
`;

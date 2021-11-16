import styled from 'styled-components/native';
import { Heading, Input, Text } from 'native-base';

export const Container = styled.View`
    flex: 1;
    background-color: white;
    padding: 32px;
`;

export const Logo = styled.View`
    width: 100%;
    margin: 64px 0px;
    padding: 0px 100px;
`;

export const Header = styled(Heading)`
    margin-bottom: 32px;
`;

export const InputText = styled(Input)`
    margin-bottom: 16px;
`;

export const Registre = styled(Text)`
    margin-top: 16px;
    text-align: center;
`;
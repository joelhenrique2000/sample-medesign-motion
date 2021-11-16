import { Input } from 'native-base';
import styled from 'styled-components/native';
import { ItemList } from '../../../components/ItemList';

export const Container = styled.View`
    flex: 1;
    background-color: #FAFCFB;
    padding: 32px;
`;

export const Item = styled(ItemList)`
    margin: 36px;
    background: red;
`;
export const InputText = styled(Input)`
    margin-bottom: 16px;
`;
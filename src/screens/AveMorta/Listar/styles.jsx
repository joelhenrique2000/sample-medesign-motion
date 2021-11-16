import styled from 'styled-components/native';
import { ItemList } from '../../../components/ItemList';

export const Container = styled.View`
    flex: 1;
    background-color: #FAFCFB;
`;

export const Item = styled(ItemList)`
    margin: 36px;
    background: red;
`;

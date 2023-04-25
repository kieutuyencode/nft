import {View, Text} from 'react-native';
import Container from './components/Container';
import EmptyCart from './components/EmptyCart';

export default function Location() {
  const data = [];
  return (
    <Container tab={0}>{!data.length > 0 ? <EmptyCart /> : null}</Container>
  );
}

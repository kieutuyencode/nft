import {View, StyleSheet, ScrollView} from 'react-native';
import Container from './components/Container';
import EmptyCart from './components/EmptyCart';
import Item from './components/location/Item';
import {scale} from '../../../variable/sizes';

export default function Location() {
  const data = [1];
  return (
    <Container tab={0}>
      {!data.length > 0 ? (
        <EmptyCart />
      ) : (
        <View style={styles.container}>
          <Item
            title="Minh Rita"
            address="294 Khuông Việt, Phường phú trung,
     Quận Tân Phú, Hồ Chí Minh"
            star={5}
          />
          <Item
            title="Minh Rita"
            address="294 Khuông Việt, Phường phú trung,
     Quận Tân Phú, Hồ Chí Minh"
            star={4.1}
          />
          <Item
            title="Minh Rita"
            address="294 Khuông Việt, Phường phú trung,
     Quận Tân Phú, Hồ Chí Minh"
            star={5}
          />
          <Item
            title="Minh Rita"
            address="294 Khuông Việt, Phường phú trung,
     Quận Tân Phú, Hồ Chí Minh"
            star={4.1}
          />
        </View>
      )}
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: scale(14),
    paddingHorizontal: scale(30),
    gap: scale(17),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

import {View, Text, ScrollView, StyleSheet} from 'react-native';
import EmptyCart from './components/EmptyCart';
import Container from './components/Container';
import Item from '../Main/components/nft/card/Item';
import {scale} from '../../../variable/sizes';

export default function Card() {
  const data = [1];
  return (
    <Container tab={2}>
      {!data.length > 0 ? (
        <EmptyCart />
      ) : (
        <ScrollView horizontal contentContainerStyle={styles.scroll}>
          <Item type="Classic" />
          <Item type="Gold" />
        </ScrollView>
      )}
    </Container>
  );
}

const styles = StyleSheet.create({
  scroll: {
    paddingHorizontal: scale(12),
    columnGap: scale(14),
    marginTop: scale(12),
  },
});

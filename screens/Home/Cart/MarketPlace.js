import {View, Text, StyleSheet} from 'react-native';
import EmptyCart from './components/EmptyCart';
import Container from './components/Container';
import {imgProduct} from '../../../variable/images';
import Item from '../Main/components/nft/market/Item';
import {scale} from '../../../variable/sizes';

export default function MarketPlace() {
  const data = [
    {
      category: 'Restaurant',
      title: 'Juicy Burger',
      address: '3720 E Olive Ave, Fresno...',
      price: 1000,
      star: 4,
    },
    {
      category: 'Restaurant',
      title: 'Juicy Burger',
      address: '3720 E Olive Ave, Fresno...',
      price: 1000,
      star: 3.6,
    },
  ];
  return (
    <Container tab={3}>
      {!data.length > 0 ? (
        <EmptyCart />
      ) : (
        <View style={styles.container}>
          {data.map((item, index) => (
            <Item cart={true} key={index} img={imgProduct} {...item} />
          ))}
        </View>
      )}
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: scale(12),
    marginHorizontal: scale(20),
  },
});

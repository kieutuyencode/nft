import {View, Text} from 'react-native';
import Item from './Item';
import {imgProduct} from '../../../../../../variable/images';
import {scale} from '../../../../../../variable/sizes';

export default function ListItem() {
  return (
    <View style={{flex: 1, marginBottom: scale(120)}}>
      {data.map((item, index) => (
        <Item key={index} img={imgProduct} {...item} />
      ))}
    </View>
  );
}

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
  {
    category: 'Restaurant',
    title: 'Juicy Burger',
    address: '3720 E Olive Ave, Fresno...',
    price: 1000,
    star: 4.1,
  },
  {
    category: 'Restaurant',
    title: 'Juicy Burger',
    address: '3720 E Olive Ave, Fresno...',
    price: 1000,
    star: 4.1,
  },
  {
    category: 'Restaurant',
    title: 'Juicy Burger',
    address: '3720 E Olive Ave, Fresno...',
    price: 1000,
    star: 4.1,
  },
  {
    category: 'Restaurant',
    title: 'Juicy Burger',
    address: '3720 E Olive Ave, Fresno...',
    price: 1000,
    star: 4.1,
  },
];

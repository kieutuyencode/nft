import {View, Text, StyleSheet, Image} from 'react-native';
import {scale} from '../../../../../../variable/sizes';
import {
  IBMPlexSans400,
  IBMPlexSans600,
  IBMPlexSans700,
} from '../../../../../../variable/fontFamily';
import Button from '../../../../../../components/buttons/Button';
import {useLanguage} from '../../../../../../store/language';
import Star from '../../../../../../variable/svgs/Star';
import Star0 from '../../../../../../variable/svgs/Star0';
import {useNavigation} from '@react-navigation/native';

export default function Item({
  category,
  title,
  address,
  price,
  img,
  star,
  cart,
}) {
  const language = useLanguage();
  const {navigate} = useNavigation();

  return (
    <View style={styles.container}>
      <View style={[styles.left, !cart && {width: '50%'}]}>
        <Image
          source={img}
          style={[styles.img, cart && {width: scale(101), height: scale(99)}]}
        />
        <View style={styles.containStar}>
          <Text style={styles.textStar}>{category}</Text>
          <View style={{flexDirection: 'row', columnGap: scale(3)}}>
            {[...Array(Math.floor(star))].map((item, index) => (
              <Star key={index} />
            ))}
            {[...Array(5 - Math.floor(star))].map((item, index) => (
              <Star0 key={index} />
            ))}
          </View>
        </View>
      </View>
      <View style={[styles.right, cart && {marginVertical: scale(2)}]}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.address}>{address}</Text>
          <Text style={styles.price}>${price}</Text>
          {!cart && (
            <View
              style={{
                marginTop: scale(20),
                marginRight: scale(16),
              }}>
              <Button
                text={buy[language]}
                vertical={8}
                onPress={() => navigate('DetailMarket')}
              />
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: scale(1),
    borderColor: '#F4007480',
    borderRadius: scale(18),
    overflow: 'hidden',
    flexDirection: 'row',
    flex: 1,
    marginBottom: scale(23),
    backgroundColor: 'rgba(20, 14, 37, 0.5);',
  },
  left: {
    borderRadius: scale(17),
    overflow: 'hidden',
    position: 'relative',
  },
  right: {
    marginVertical: scale(12),
    marginLeft: scale(16),
    flex: 1,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  title: {
    ...IBMPlexSans600,
    fontSize: scale(16),
    color: 'white',
  },
  address: {
    ...IBMPlexSans400,
    fontSize: scale(12),
    color: 'white',
    flex: 1,
    marginVertical: scale(2),
  },
  price: {
    ...IBMPlexSans700,
    fontSize: scale(20),
    color: 'white',
  },
  containStar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(20, 14, 37, 0.5)',
    alignItems: 'center',
    paddingVertical: scale(6),
  },
  textStar: {
    ...IBMPlexSans400,
    fontSize: scale(12),
    color: 'white',
    marginBottom: scale(2),
    lineHeight: scale(14),
  },
});

const buy = {
  en: 'Buy now',
  vn: 'Mua ngay',
};

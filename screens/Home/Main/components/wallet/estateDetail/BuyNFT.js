import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  IBMPlexSans400,
  IBMPlexSans700,
} from '../../../../../../variable/fontFamily';
import {scale} from '../../../../../../variable/sizes';
import {useLanguage} from '../../../../../../store/language';
import {
  buy,
  location,
} from '../../../../../../language/home/main/wallet/estate-detail';
import {image1, image2} from '../../../../../../variable/images';
import Button from '../../../../../../components/buttons/Button';

export default function BuyNFT() {
  const language = useLanguage();

  return (
    <>
      <TouchableOpacity>
        <LinearGradient
          colors={['rgba(255, 255, 255, 0.076)', 'rgba(143, 121, 217, 0.224)']}
          start={{x: 0.5, y: 0}}
          end={{x: 1, y: 1}}
          locations={[0.3392, 0.9986]}
          style={{borderRadius: 999}}>
          <Text style={styles.text}>
            1 {location[language]} NFT ={' '}
            <Text style={{color: '#E00374', ...IBMPlexSans700}}>200</Text> USDT
          </Text>
        </LinearGradient>
      </TouchableOpacity>
      <View style={styles.containerImg}>
        <Image source={image1} style={styles.img} />
        <Image source={image2} style={styles.img} />
        <Image source={image2} style={styles.img} />
      </View>
      <View style={{alignItems: 'center'}}>
        <Button
          text={buy[language]}
          font={IBMPlexSans700}
          size={16}
          lineHeight={18}
          vertical={10}
          horizontal={64}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    ...IBMPlexSans400,
    fontSize: scale(16),
    color: 'white',
    lineHeight: scale(18),
    paddingVertical: scale(12),
    marginLeft: scale(24),
  },
  containerImg: {
    marginTop: scale(24),
    justifyContent: 'center',
    columnGap: scale(10),
    flexDirection: 'row',
    marginBottom: scale(30),
  },
  img: {
    width: scale(63),
    height: scale(63),
  },
});

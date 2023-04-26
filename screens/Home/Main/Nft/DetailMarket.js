import {View, Text, Image, StyleSheet} from 'react-native';
import BackgroundBackFull from '../../../../components/background/BackgroundBackFull';
import Card from '../components/nft/detailMarket/Card';
import {scale} from '../../../../variable/sizes';
import {imgProduct} from '../../../../variable/images';
import {
  IBMPlexSans400,
  IBMPlexSans600,
  IBMPlexSans700,
} from '../../../../variable/fontFamily';
import Text400size16 from '../../../../components/texts/Text400size16';
import Star from '../../../../variable/svgs/Star';
import Star0 from '../../../../variable/svgs/Star0';
import Button from '../../../../components/buttons/Button';
import {useLanguage} from '../../../../store/language';
import {buy, openHours} from '../../../../language/home/main/nft/detail-market';
import Description from '../components/nft/detailMarket/Description';
import Review from '../components/nft/detailMarket/Review';

export default function DetailMarket() {
  const language = useLanguage();

  return (
    <BackgroundBackFull>
      <View style={{marginTop: scale(24)}}>
        <Card>
          <Image source={imgProduct} style={styles.img} />
          <View style={styles.container}>
            <View style={styles.containTitle}>
              <Text style={styles.title}>Juicy Burger</Text>
              <View style={styles.containStar}>
                <Text400size16 text="Restaurant" />
                <View style={styles.star}>
                  {[...Array(Math.floor(4.1))].map((item, index) => (
                    <Star key={index} size={12} />
                  ))}
                  {[...Array(5 - Math.floor(4.1))].map((item, index) => (
                    <Star0 key={index} size={12} />
                  ))}
                </View>
              </View>
            </View>
            <View style={{marginTop: scale(10)}}>
              <Text400size16 text="3720 E Olive Ave, Fresno, CA 93702 ..." />
            </View>
            <View style={{marginTop: scale(6), marginBottom: scale(14)}}>
              <Text style={styles.textBig}>$1,000</Text>
            </View>
            <Button
              text={buy[language]}
              font={IBMPlexSans700}
              size={16}
              lineHeight={18}
              vertical={10}
              angle
              borderNone
            />
            <Description />
          </View>
        </Card>
        <Review />
        <Card>
          <Image source={imgProduct} style={styles.img} />
          <View
            style={{
              paddingVertical: scale(23),
              paddingHorizontal: scale(25),
              borderBottomColor: 'rgba(255, 222, 227, 0.2)',
              borderBottomWidth: scale(1),
            }}>
            <Text style={styles.text700size14}>Juicy Burger</Text>
            <Text style={[styles.text700size14, IBMPlexSans400]}>
              3720 E Olive Ave, Fresno, CA 93702, Unite...
            </Text>
            <Text style={[styles.text700size14, IBMPlexSans400]}>
              mrjohn@gmail.com
            </Text>
            <Text style={[styles.text700size14, IBMPlexSans400]}>
              +123356789
            </Text>
          </View>
          <Text style={styles.textOpen}>{openHours[language]}</Text>
        </Card>
      </View>
    </BackgroundBackFull>
  );
}

const styles = StyleSheet.create({
  img: {width: '100%', borderRadius: scale(18), height: scale(321)},
  title: {...IBMPlexSans600, fontSize: scale(20), color: 'white'},
  containTitle: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginTop: scale(20),
  },
  containStar: {
    justifyContent: 'flex-end',
  },
  star: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: scale(6),
  },
  container: {
    marginHorizontal: scale(20),
    marginBottom: scale(20),
  },
  textBig: {
    ...IBMPlexSans700,
    fontSize: scale(20),
    color: 'white',
  },
  textOpen: {
    ...IBMPlexSans400,
    fontSize: scale(20),
    color: 'white',
    lineHeight: scale(22),
    marginLeft: scale(28),
    marginVertical: scale(20),
  },
  text700size14: {
    ...IBMPlexSans700,
    fontSize: scale(14),
    color: 'white',
    marginTop: scale(2),
  },
});

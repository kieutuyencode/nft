import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BackgroundBack from '../../../../components/background/BackgroundBack';
import {IBMPlexSans400, IBMPlexSans700} from '../../../../variable/fontFamily';
import {scale} from '../../../../variable/sizes';
import {
  mycard,
  mylocation,
  mymarket,
  myvirtual,
} from '../../../../language/home/cart/menu';
import {useLanguage} from '../../../../store/language';
import {bannerCart} from '../../../../variable/images';
import {virtualDesc} from '../../../../language/home/main/wallet/wallet';
import {useNavigation} from '@react-navigation/native';
import Button from '../../../../components/buttons/Button';

export default function Container({children, tab}) {
  const language = useLanguage();
  const {navigate} = useNavigation();

  return (
    <BackgroundBack hide noScroll>
      <View style={styles.menu}>
        {data.map((item, index) => (
          <TouchableOpacity onPress={() => navigate(item.link)} key={index}>
            <Text style={[styles.text, tab === index && {color: '#E80274'}]}>
              {item.text[language]}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView style={{position: 'relative'}}>
        <View style={{marginBottom: scale(130)}}>
          <ImageBackground source={bannerCart}>
            <Text style={styles.title}>{data[tab].text[language]}</Text>
            <Text style={styles.des}>{virtualDesc[language]}</Text>
          </ImageBackground>
          {children}
        </View>
        <View style={styles.button}>
          <Button
            text={buynow[language]}
            font={IBMPlexSans700}
            size={14}
            lineHeight={17}
            vertical={6}
            horizontal={20}
            angle={true}
            borderNone
          />
        </View>
      </ScrollView>
    </BackgroundBack>
  );
}

const styles = StyleSheet.create({
  text: {
    ...IBMPlexSans700,
    fontSize: scale(10),
    color: 'white',
    textAlign: 'center',
    lineHeight: scale(12),
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: scale(6),
    columnGap: scale(6),
    marginVertical: scale(8),
  },
  title: {
    ...IBMPlexSans700,
    fontSize: scale(15),
    color: 'white',
    textAlign: 'center',
    marginTop: scale(96),
  },
  des: {
    ...IBMPlexSans400,
    fontSize: scale(10),
    color: 'white',
    textAlign: 'center',
    marginVertical: scale(6),
  },
  button: {
    position: 'absolute',
    bottom: scale(50),
    right: scale(16),
  },
});

const data = [
  {text: mylocation, link: 'Location'},
  {text: myvirtual, link: 'Virtual'},
  {text: mycard, link: 'Card'},
  {text: mymarket, link: 'MarketPlace'},
];

const buynow = {en: 'Buy more', vn: 'Mua thêm'};

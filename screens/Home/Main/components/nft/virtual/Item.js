import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {scale} from '../../../../../../variable/sizes';
import {
  virtual_gold,
  virtual_platinum,
  virtual_silver,
  virtual_vip,
} from '../../../../../../variable/images';
import {
  IBMPlexSans400,
  IBMPlexSans700,
} from '../../../../../../variable/fontFamily';
import {useLanguage} from '../../../../../../store/language';
import LinearGradient from 'react-native-linear-gradient';
import {gradient, primary} from '../../../../../../variable/colors';

export default function Item({icon, type, months, growth, money, title}) {
  const language = useLanguage();

  return (
    <View style={styles.container}>
      <Image
        source={
          type === 'Silver'
            ? virtual_silver
            : type === 'Gold'
            ? virtual_gold
            : type === 'Platinum'
            ? virtual_platinum
            : type === 'Vip'
            ? virtual_vip
            : null
        }
        style={styles.img}
      />
      <View style={styles.absolute}>
        {icon}
        <View style={{alignItems: 'center', marginLeft: scale(30)}}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.money}>${money}</Text>
          <Text style={styles.textSm}>
            {months} {monthsL[language]} - {growthL[language]}: {growth}%
          </Text>
          <TouchableOpacity>
            <LinearGradient
              colors={[primary, gradient]}
              start={{x: 1, y: 0}}
              end={{x: 0, y: 0}}
              style={styles.btn}>
              <Text style={styles.title}>{buynow[language]}</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    position: 'relative',
    alignItems: 'center',
  },
  absolute: {
    position: 'absolute',
    zIndex: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: scale(373),
    height: scale(209),
  },
  title: {
    ...IBMPlexSans700,
    fontSize: scale(16),
    color: 'white',
    lineHeight: scale(19),
  },
  money: {
    ...IBMPlexSans700,
    fontSize: scale(20),
    color: 'white',
    marginBottom: scale(9),
  },
  textSm: {
    ...IBMPlexSans400,
    fontSize: scale(14),
    color: 'white',
  },
  btn: {
    borderRadius: 999,
    paddingVertical: scale(6),
    paddingHorizontal: scale(12),
    marginTop: scale(12),
  },
});

const monthsL = {
  en: 'months',
  vn: 'tháng',
};

const growthL = {
  en: 'Growth',
  vn: 'Phát triển',
};

const buynow = {
  en: 'BUY NOW',
  vn: 'MUA NGAY',
};

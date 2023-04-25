import {View, Text, StyleSheet} from 'react-native';
import ButtonBack from '../../../../../../components/buttons/ButtonBack';
import {
  address,
  addresst,
  category,
  content,
  country,
  desc,
  features,
  lat,
  lng,
  province,
  title1,
  title2,
} from '../../../../../../language/home/main/wallet/estate-detail';
import {scale} from '../../../../../../variable/sizes';
import {
  IBMPlexSans400,
  IBMPlexSans700,
} from '../../../../../../variable/fontFamily';
import {useLanguage} from '../../../../../../store/language';
import Text400size16 from '../../../../../../components/texts/Text400size16';
import Input from './Input';
import BuyNFT from './BuyNFT';

export default function Remain() {
  const language = useLanguage();

  return (
    <>
      <View style={styles.btnBack}>
        <ButtonBack />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>{title1[language]}</Text>
        <Text style={styles.content}>{content[language]}</Text>
        <Text style={styles.title}>{title2[language]}</Text>
        <View style={{alignItems: 'center', flex: 1, marginBottom: scale(26)}}>
          <View>
            <Text400size16 text={address[language]} center />
            <View style={styles.containTextSm}>
              <Text style={styles.textSmall}>{lat[language]}: 10.76530</Text>
              <Text style={styles.textSmall}>{lng[language]}: 106.67148</Text>
            </View>
          </View>
        </View>
        <Input placeholder={country[language]} more />
        <Input placeholder={province[language]} more />
        <Input placeholder={category[language]} more />
        <Input placeholder={features[language]} />
        <Input placeholder={addresst[language]} />
        <Input placeholder={desc[language]} desc />
        <BuyNFT />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  btnBack: {position: 'absolute', left: scale(12), top: scale(12), zIndex: 10},
  container: {
    marginHorizontal: scale(20),
    marginTop: scale(28),
  },
  title: {
    ...IBMPlexSans700,
    fontSize: scale(20),
    textAlign: 'center',
    color: 'white',
  },
  content: {
    ...IBMPlexSans400,
    fontSize: scale(10),
    color: 'white',
    textAlign: 'center',
    marginTop: scale(6),
    marginBottom: scale(46),
  },
  textSmall: {
    ...IBMPlexSans700,
    fontSize: scale(10),
    color: 'white',
  },
  containTextSm: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

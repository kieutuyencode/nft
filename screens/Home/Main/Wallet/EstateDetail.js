import {View, StyleSheet} from 'react-native';
import BackgroundHeader from '../../../../components/background/BackgroundHeader';
import Text700size24 from '../../../../components/texts/Text700size24';
import {useLanguage} from '../../../../store/language';
import {
  MAX,
  days,
  desc,
  mint,
  title,
  total,
} from '../../../../language/home/main/wallet/estate-NFT';
import {scale} from '../../../../variable/sizes';
import Text400size16 from '../../../../components/texts/Text400size16';
import Progress from '../components/wallet/estateNFT/Progress';
import ListItem from '../components/wallet/estateNFT/ListItem';
import Button from '../../../../components/buttons/Button';
import {IBMPlexSans700} from '../../../../variable/fontFamily';
import {useNavigation} from '@react-navigation/native';
import Remain from '../components/wallet/estateDetail/Remain';

export default function EstateNFT() {
  const language = useLanguage();
  const {navigate} = useNavigation();

  return (
    <BackgroundHeader>
      <View style={styles.container}>
        <Text700size24 text={title[language]} />
        <Text400size16 text={desc[language]} center color="#F40074" />
        <View style={{marginTop: scale(24), marginBottom: scale(22)}}>
          <Progress
            number1={2}
            number2={60}
            label1={days[language]}
            label2={total[language]}
            label3={days[language]}
            progress={16}
          />
        </View>
        <Progress
          number1={10}
          number2={1000}
          label1={'NFT'}
          label2={MAX[language]}
          progress={16}
        />
      </View>
      <ListItem />
      <Remain />
    </BackgroundHeader>
  );
}

const styles = StyleSheet.create({
  container: {marginTop: scale(20), marginHorizontal: scale(20)},
  btn: {alignItems: 'center', marginTop: scale(54)},
});

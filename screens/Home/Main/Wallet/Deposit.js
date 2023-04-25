import {View, Text, StyleSheet} from 'react-native';
import BackgroundBack from '../../../../components/background/BackgroundBack';
import Logo from '../components/wallet/deposit/Logo';
import Qrcode from '../components/wallet/deposit/Qrcode';
import {scale} from '../../../../variable/sizes';
import {IBMPlexSans400} from '../../../../variable/fontFamily';
import {useLanguage} from '../../../../store/language';
import {description} from '../../../../language/home/main/wallet/deposit';

export default function Deposit() {
  const language = useLanguage();

  return (
    <BackgroundBack>
      <Logo />
      <View style={styles.container}>
        <Qrcode />
        <Text style={styles.text}>{description[language]}</Text>
      </View>
    </BackgroundBack>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: scale(24),
    marginTop: scale(34),
  },
  text: {
    ...IBMPlexSans400,
    fontSize: scale(14),
    color: 'white',
    marginTop: scale(20),
  },
});

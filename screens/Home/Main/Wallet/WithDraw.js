import {View, Text, StyleSheet} from 'react-native';
import BackgroundBack from '../../../../components/background/BackgroundBack';
import {scale} from '../../../../variable/sizes';
import Text700size24 from '../../../../components/texts/Text700size24';
import {useLanguage} from '../../../../store/language';
import {
  amount,
  note,
  withDraw,
} from '../../../../language/home/main/wallet/withdraw';
import Input2 from '../../../../components/inputs/Input2';
import DescriptionText from '../../../../components/DescriptionText';
import {IBMPlexSans700} from '../../../../variable/fontFamily';
import Button from '../../../../components/buttons/Button';

export default function WithDraw() {
  const language = useLanguage();

  return (
    <BackgroundBack>
      <View style={styles.container}>
        <Text700size24 text={withDraw[language]} />
        <View style={styles.containInput1}>
          <Input2 placeholder={note[language]} />
          <View style={styles.marginTop}>
            <Input2 placeholder="USDT" number />
          </View>
          <View style={styles.marginTop}>
            <Input2 placeholder={amount[language]} number />
          </View>
        </View>
        <View style={{marginLeft: scale(10)}}>
          <DescriptionText />
        </View>
        <View style={styles.containInput2}>
          <Input2 placeholder="2FA" />
        </View>
        <View style={{alignItems: 'center'}}>
          <Button
            text={withDraw[language]}
            font={IBMPlexSans700}
            size={20}
            vertical={8}
            horizontal={40}
            lineHeight={23}
          />
        </View>
      </View>
    </BackgroundBack>
  );
}

const styles = StyleSheet.create({
  container: {marginTop: scale(40), marginHorizontal: scale(20)},
  containInput1: {
    marginTop: scale(18),
    marginBottom: scale(28),
  },
  marginTop: {
    marginTop: scale(18),
  },
  containInput2: {
    marginTop: scale(18),
    marginBottom: scale(22),
  },
});

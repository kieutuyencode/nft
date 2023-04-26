import {View, Text, StyleSheet} from 'react-native';
import BackgroundHeader from '../../../components/background/BackgroundHeader';
import Text700size24 from '../../../components/texts/Text700size24';
import {useLanguage} from '../../../store/language';
import {swap, tradeToken} from '../../../language/home/main/swap';
import {scale} from '../../../variable/sizes';
import Text400size16 from '../../../components/texts/Text400size16';
import SelectCurrency from './components/swap/SelectCurrency';
import Button from '../../../components/buttons/Button';
import {IBMPlexSans600} from '../../../variable/fontFamily';

export default function Swap() {
  const language = useLanguage();

  return (
    <BackgroundHeader>
      <View style={styles.container}>
        <View style={{alignItems: 'flex-start', marginHorizontal: scale(4)}}>
          <Text700size24 text={swap[language]} />
          <Text400size16 text={tradeToken[language]} />
        </View>
        <SelectCurrency />
        <View style={styles.button}>
          <Button
            text={swap[language]}
            font={IBMPlexSans600}
            size={16}
            lineHeight={20}
            vertical={12}
            horizontal={76}
          />
        </View>
      </View>
    </BackgroundHeader>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: scale(24),
    marginHorizontal: scale(20),
  },
  button: {
    alignItems: 'center',
    marginTop: scale(26),
  },
});

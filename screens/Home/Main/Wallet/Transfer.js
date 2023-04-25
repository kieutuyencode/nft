import {View, StyleSheet} from 'react-native';
import BackgroundBack from '../../../../components/background/BackgroundBack';
import {scale} from '../../../../variable/sizes';
import {useLanguage} from '../../../../store/language';
import Text700size24 from '../../../../components/texts/Text700size24';
import {
  amount,
  choice,
  history1,
  history2,
  label1,
  label2,
  receive,
  send,
  transfer,
} from '../../../../language/home/main/wallet/transfer';
import Input2 from '../../../../components/inputs/Input2';
import DescriptionText from '../../../../components/DescriptionText';
import Button1 from '../../../../components/buttons/Button1';
import HistoryBorder from '../../../../components/history/HistoryBorder';

export default function Transfer() {
  const language = useLanguage();

  return (
    <BackgroundBack>
      <View style={styles.container}>
        <Text700size24 text={transfer[language]} />
        <View style={styles.marginTop}>
          <Input2 label={receive[language]} />
        </View>
        <View style={styles.marginTop}>
          <Input2 label={choice[language]} img placeholder="USDT" />
        </View>
        <View style={styles.marginTop}>
          <Input2 label={amount[language]} />
        </View>
        <View style={styles.description}>
          <DescriptionText />
        </View>
        <View style={styles.twoFA}>
          <Input2 placeholder="2FA" />
        </View>
        <View style={styles.containBtn}>
          <Button1 text={send[language]} width={176} />
        </View>
        <HistoryBorder
          title={history1[language]}
          label1={label1[language]}
          label2={label2[language]}
        />
        <View style={{marginTop: scale(22)}}>
          <HistoryBorder
            title={history2[language]}
            label1={label1[language]}
            label2={label2[language]}
          />
        </View>
      </View>
    </BackgroundBack>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: scale(36),
    marginHorizontal: scale(20),
  },
  marginTop: {
    marginTop: scale(6),
  },
  description: {
    marginTop: scale(12),
    marginLeft: scale(12),
  },
  twoFA: {
    marginVertical: scale(20),
  },
  containBtn: {
    alignItems: 'center',
    marginBottom: scale(58),
  },
});

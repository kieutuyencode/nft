import {View, Text, StyleSheet, Image} from 'react-native';
import BgLinearGradient from '../../../../../../components/BgLinearGradient';
import {scale} from '../../../../../../variable/sizes';
import Text400size16 from '../../../../../../components/texts/Text400size16';
import {useLanguage} from '../../../../../../store/language';
import {
  netProfit,
  personalSale,
  systemCommission,
  systemSales,
} from '../../../../../../language/home/main/wallet/detail';
import NumberTable1 from './NumberTable1';
import {company1} from '../../../../../../variable/images';
import LinearGradient from 'react-native-linear-gradient';
import TotalTable1 from './TotalTable1';

export default function Table1() {
  const language = useLanguage();

  return (
    <BgLinearGradient>
      <View style={styles.container}>
        <View style={[styles.containerInner, styles.borderRight]}>
          <View style={styles.containNumber}>
            <NumberTable1 number="1 986 086.06" />
          </View>
          <Text400size16 text={systemCommission[language]} center />
        </View>
        <View style={styles.containerInner}>
          <View style={styles.containNumber}>
            <NumberTable1 number="1 986 086.06" />
          </View>
          <Text400size16 text={netProfit[language]} center />
        </View>
      </View>
      <View style={[styles.container, styles.borderTop]}>
        <View style={[styles.containerInner, styles.borderRight]}>
          <View style={styles.containNumber}>
            <NumberTable1 number="1 986 086.06" />
          </View>
          <Text400size16 text={personalSale[language]} center />
        </View>
        <View style={styles.containerInner}>
          <View style={styles.containNumber}>
            <NumberTable1 number="1 986 086.06" />
          </View>
          <Text400size16 text={systemSales[language]} center />
        </View>
      </View>
      <TotalTable1 />
    </BgLinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  containerInner: {
    flex: 1,
    paddingVertical: scale(24),
    paddingHorizontal: scale(9),
  },
  borderRight: {
    borderRightWidth: scale(1),
    borderColor: 'rgba(249, 214, 222, 0.2)',
  },
  borderTop: {
    borderTopWidth: scale(1),
    borderColor: 'rgba(249, 214, 222, 0.2)',
  },
  containNumber: {marginBottom: scale(6)},
});

import {View, Text, StyleSheet} from 'react-native';
import BackgroundHeaderBack from '../../../../components/background/BackgroundHeaderBack';
import {useLanguage} from '../../../../store/language';
import {
  account,
  totalFree,
  totalProfit,
} from '../../../../language/home/main/wallet/detail';
import ItemTotal from '../components/wallet/detail/ItemTotal';
import {company1} from '../../../../variable/images';
import {customMarginTop, scaleWidth} from '../../../../variable/sizes';
import Table1 from '../components/wallet/detail/Table1';

export default function Detail() {
  const language = useLanguage();

  return (
    <BackgroundHeaderBack title={account[language]}>
      <View style={styles.containerTotal}>
        <ItemTotal
          img={company1}
          number="1 986 086.06"
          text={totalFree[language]}
        />
        <ItemTotal
          img={company1}
          number="1 986 086.06"
          text={totalProfit[language]}
        />
      </View>
      <View style={customMarginTop(26)}>
        <Table1 />
      </View>
    </BackgroundHeaderBack>
  );
}

const styles = StyleSheet.create({
  containerTotal: {
    flexDirection: 'row',
    columnGap: 24 * scaleWidth,
  },
});

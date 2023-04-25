import {View, Text, StyleSheet} from 'react-native';
import BackgroundHeaderBack from '../../../../components/background/BackgroundHeaderBack';
import {useLanguage} from '../../../../store/language';
import {
  account,
  description,
  historyCommission,
  totalFree,
  totalProfit,
  userName,
} from '../../../../language/home/main/wallet/detail';
import ItemTotal from '../components/wallet/detail/ItemTotal';
import {company1} from '../../../../variable/images';
import {customMarginTop, scale, scaleWidth} from '../../../../variable/sizes';
import Table1 from '../components/wallet/detail/Table1';
import Table2 from '../components/wallet/detail/Table2';
import HistoryBorder from '../../../../components/history/HistoryBorder';

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
      <View style={{marginVertical: scale(26)}}>
        <Table2 />
      </View>
      <HistoryBorder
        title={historyCommission[language]}
        label1={userName[language]}
        label2={description[language]}
      />
    </BackgroundHeaderBack>
  );
}

const styles = StyleSheet.create({
  containerTotal: {
    flexDirection: 'row',
    columnGap: 24 * scaleWidth,
  },
});

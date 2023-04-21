import {View, Text, StyleSheet} from 'react-native';
import BgLinearGradient from '../../../../../../components/BgLinearGradient';
import {scale} from '../../../../../../variable/sizes';

export default function Table1() {
  return (
    <BgLinearGradient>
      <View style={styles.container}>
        <View style={[styles.containerInner, styles.borderRight]}>
          <View style={styles.borderBottom}></View>
          <View></View>
        </View>
        <View style={styles.containerInner}>
          <View style={styles.borderBottom}></View>
          <View></View>
        </View>
      </View>
    </BgLinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  containerInner: {
    flex: 1,
  },
  borderRight: {
    borderRightWidth: scale(1),
    borderColor: 'rgba(249, 214, 222, 0.2)',
  },
  borderBottom: {
    borderBottomWidth: scale(1),
    borderColor: 'rgba(249, 214, 222, 0.2)',
  },
});

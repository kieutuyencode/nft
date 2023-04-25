import {View, Text, StyleSheet} from 'react-native';
import HexagonDark from '../../../../../../variable/svgs/HexagonDark';
import {
  IBMPlexSans400,
  IBMPlexSans700,
} from '../../../../../../variable/fontFamily';
import {scale} from '../../../../../../variable/sizes';

export default function Item({money, text1, text2}) {
  return (
    <View style={styles.container}>
      <HexagonDark />
      <View style={styles.inner}>
        <Text style={styles.money}>{money}</Text>
        <Text style={styles.text}>{text1}</Text>
        <Text style={styles.text}>{text2}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {position: 'absolute'},
  money: {
    ...IBMPlexSans700,
    fontSize: scale(30),
    color: 'white',
    textAlign: 'center',
    marginBottom: scale(6),
  },
  text: {
    ...IBMPlexSans400,
    fontSize: scale(14),
    color: 'white',
    textAlign: 'center',
  },
});

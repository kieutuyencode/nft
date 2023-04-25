import {View, Text, StyleSheet} from 'react-native';
import {scale} from '../../../../../../variable/sizes';
import Text400size16 from '../../../../../../components/texts/Text400size16';
import {IBMPlexSans600} from '../../../../../../variable/fontFamily';
import {useLanguage} from '../../../../../../store/language';
import {
  locations,
  member,
  nftCard,
  purchased,
  virtual,
} from '../../../../../../language/home/main/wallet/detail';

export default function Table2() {
  const language = useLanguage();

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text400size16 text={member[language]} />
        <Text style={styles.text}>12 578 688</Text>
      </View>
      <View style={[styles.row, {backgroundColor: 'rgba(0,0,0,0)'}]}>
        <Text400size16 text={purchased[language]} />
        <Text style={styles.text}>12 578 688</Text>
      </View>
      <View style={styles.row}>
        <Text400size16 text={nftCard[language]} />
        <Text style={styles.text}>12 578 688</Text>
      </View>
      <View style={[styles.row, {backgroundColor: 'rgba(0,0,0,0)'}]}>
        <Text400size16 text={virtual[language]} />
        <Text style={styles.text}>12 578 688</Text>
      </View>
      <View style={styles.row}>
        <Text400size16 text={locations[language]} />
        <Text style={styles.text}>88</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 18,
    borderWidth: scale(1),
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: scale(16),
    paddingVertical: scale(10),
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  text: {
    ...IBMPlexSans600,
    fontSize: scale(16),
    color: 'white',
  },
});

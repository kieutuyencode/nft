import {View, Text, StyleSheet} from 'react-native';
import {
  IBMPlexSans400,
  IBMPlexSans700,
} from '../../../../../../variable/fontFamily';
import {scale} from '../../../../../../variable/sizes';
import {useLanguage} from '../../../../../../store/language';
import {
  about,
  aboutText,
  features,
  nft,
  nftText,
} from '../../../../../../language/home/main/nft/detail-market';
import Feature from './Feature';

export default function Description() {
  const language = useLanguage();

  return (
    <View style={{marginTop: scale(16)}}>
      <Text style={styles.title}>{about[language]}</Text>
      <Text style={styles.text}>{aboutText[language]}</Text>
      <Text style={styles.title}>{nft[language]}</Text>
      <Text style={styles.text}>{nftText[language]}</Text>
      <View style={{marginBottom: scale(8)}}>
        <Text style={styles.title}>{features[language]}</Text>
      </View>
      <View style={[styles.container, {marginBottom: scale(11)}]}>
        <Feature text="Take out" />
        <Feature text="Deliver" />
      </View>
      <View style={styles.container}>
        <Feature text="Deliver" />
        <Feature text="Take out" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {...IBMPlexSans700, fontSize: scale(14), color: 'white'},
  text: {
    ...IBMPlexSans400,
    fontSize: scale(13),
    color: 'white',
    marginBottom: scale(20),
  },
  container: {
    flexDirection: 'row',
    columnGap: scale(14),
  },
});

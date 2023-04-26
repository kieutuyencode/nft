import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {scale} from '../../../../../../variable/sizes';
import Input2 from '../../../../../../components/inputs/Input2';
import {
  category,
  keyword,
  nation,
  province,
  search,
} from '../../../../../../language/home/main/nft/market';
import {useLanguage} from '../../../../../../store/language';
import SearchIcon from '../../../../../../variable/svgs/Search';
import {IBMPlexSans400} from '../../../../../../variable/fontFamily';

export default function Search() {
  const language = useLanguage();

  return (
    <LinearGradient
      colors={['rgba(80, 45, 159, 0.4)', 'rgba(8, 2, 28, 0)']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      locations={[0.3392, 0.9986]}
      style={styles.container}>
      <View style={styles.mb}>
        <Input2 placeholder={keyword[language]} />
      </View>
      <View style={styles.mb}>
        <Input2 placeholder={nation[language]} />
      </View>
      <View style={styles.mb}>
        <Input2 placeholder={province[language]} />
      </View>
      <View style={styles.mb}>
        <Input2 placeholder={category[language]} />
      </View>
      <TouchableOpacity>
        <LinearGradient
          colors={['#502D9F', '#F40074']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          locations={[0.3392, 0.9986]}
          style={styles.btn}>
          <SearchIcon />
          <Text style={styles.text}>{search[language]}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: 'rgba(106, 49, 129, 0.2)',
    borderWidth: scale(2),
    borderRadius: scale(18),
    paddingVertical: scale(16),
    paddingHorizontal: scale(20),
    marginBottom: scale(32),
  },
  mb: {
    marginBottom: scale(15),
  },
  btn: {
    borderRadius: 999,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    ...IBMPlexSans400,
    fontSize: scale(16),
    color: 'white',
    lineHeight: scale(18),
    marginLeft: scale(4),
  },
});

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import BackgroundTabSetting from '../../../../components/background/BackgroundTabSetting';
import {
  IBMPlexSans400,
  IBMPlexSans700,
  Inter400,
} from '../../../../variable/fontFamily';
import {scale} from '../../../../variable/sizes';
import {useLanguage} from '../../../../store/language';
import {
  copy,
  myLink,
  note,
  personal,
  share,
  share2,
  system,
} from '../../../../language/home/main/setting/referral';
import LinearGradient from 'react-native-linear-gradient';
import Facebook from '../../../../variable/svgs/Facebook';
import Telegram from '../../../../variable/svgs/Telegram';
import Twitter from '../../../../variable/svgs/Twitter';
import Earned from '../../../../variable/svgs/Earned';
import Setting2 from '../../../../variable/svgs/Setting2';
import {bannerReferral} from '../../../../variable/images';

export default function ReferralLink() {
  const language = useLanguage();

  return (
    <BackgroundTabSetting>
      <Text style={styles.title}>{share[language]}</Text>
      <View style={styles.card}>
        <Text style={styles.titleCard}>{myLink[language]}</Text>
        <TextInput
          style={styles.input}
          defaultValue="https://toearnnow.com/auth/register/hongphan"
        />
        <View style={{alignItems: 'center'}}>
          <View>
            <TouchableOpacity>
              <LinearGradient
                colors={['#E50876', '#4A1A5B']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={styles.btn}>
                <Text style={styles.textBtn}>{copy[language]}</Text>
              </LinearGradient>
            </TouchableOpacity>
            <View style={styles.share}>
              <View style={{marginRight: scale(10)}}>
                <Text style={styles.textShare}>{share2[language]}</Text>
              </View>
              <View style={{flexDirection: 'row', columnGap: scale(6)}}>
                <Facebook scale={17} />
                <Telegram scale={17} />
                <Twitter scale={17} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.note}>
          <Text style={styles.textNote}>{note[language]}</Text>
          <View
            style={[
              {marginLeft: scale(16), marginRight: scale(10)},
              styles.itemNote,
            ]}>
            <Earned />
            <Text style={[styles.textNote, {color: '#0FFF00'}]}>
              {personal[language]}
            </Text>
          </View>
          <View style={styles.itemNote}>
            <Setting2 />
            <Text style={[styles.textNote, {color: '#E7FF00'}]}>
              {system[language]}
            </Text>
          </View>
        </View>
      </View>
      <View style={{alignItems: 'center', marginTop: scale(26)}}>
        <Image
          source={bannerReferral}
          style={{width: scale(196), height: scale(183)}}
        />
      </View>
    </BackgroundTabSetting>
  );
}

const styles = StyleSheet.create({
  title: {
    ...IBMPlexSans400,
    fontSize: scale(14),
    color: 'white',
    textAlign: 'center',
  },
  titleCard: {
    ...IBMPlexSans700,
    fontSize: scale(14),
    color: 'white',
    textAlign: 'center',
    lineHeight: scale(16),
  },
  card: {
    borderRadius: scale(18),
    backgroundColor: '#4C2060',
    paddingHorizontal: scale(16),
    paddingVertical: scale(12),
    shadowColor: 'rgba(255, 255, 255, 1)',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.22,
    shadowRadius: 9.22,
    elevation: 12,
    marginTop: scale(32),
  },
  input: {
    borderWidth: scale(1),
    borderRadius: scale(5),
    borderColor: '#EAEAEA',
    backgroundColor: 'white',
    paddingVertical: scale(8),
    paddingHorizontal: scale(12),
    marginTop: scale(20),
  },
  btn: {
    borderRadius: scale(5),
    marginTop: scale(16),
  },
  textBtn: {
    ...IBMPlexSans700,
    fontSize: scale(13),
    color: 'white',
    lineHeight: scale(15),
    paddingHorizontal: scale(20),
    paddingVertical: scale(12),
    paddingHorizontal: scale(20),
  },
  share: {
    flexDirection: 'row',
    marginTop: scale(16),
    alignItems: 'center',
  },
  textShare: {
    ...IBMPlexSans400,
    fontSize: scale(13),
    color: 'white',
    lineHeight: scale(15),
  },
  note: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scale(8),
  },
  textNote: {
    ...Inter400,
    fontSize: scale(10),
    color: 'white',
  },
  itemNote: {
    flexDirection: 'row',
    columnGap: scale(4),
  },
});

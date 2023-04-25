import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import BackgroundTabSetting from '../../../../components/background/BackgroundTabSetting';
import Text700size24 from '../../../../components/texts/Text700size24';
import {useLanguage} from '../../../../store/language';
import {
  contact,
  content,
  fname,
  lname,
  phone,
  submit,
  title,
} from '../../../../language/home/main/setting/contact';
import Input from '../components/setting/contact/Input';
import LinearGradient from 'react-native-linear-gradient';
import {IBMPlexSans700} from '../../../../variable/fontFamily';
import {scale} from '../../../../variable/sizes';
import {contactBanner} from '../../../../variable/images';

export default function Contact() {
  const language = useLanguage();

  return (
    <BackgroundTabSetting>
      <Text700size24 text={contact[language]} />
      <View>
        <View
          style={[
            styles.marginBottom,
            {flexDirection: 'row', columnGap: scale(16), marginTop: scale(4)},
          ]}>
          <Input text={fname[language]} />
          <Input text={lname[language]} />
        </View>
        <View style={styles.marginBottom}>
          <Input text="Email" keyboardType="email-address" />
        </View>
        <View style={styles.marginBottom}>
          <Input text={phone[language]} keyboardType="phone-pad" />
        </View>
        <View style={styles.marginBottom}>
          <Input text={title[language]} />
        </View>
        <Input text={content[language]} content />
      </View>
      <View style={styles.containBtn}>
        <TouchableOpacity>
          <LinearGradient
            colors={['#E50876', '#4A1A5B']}
            start={{x: 1, y: 1}}
            end={{x: 0, y: 0}}
            style={{borderRadius: 22}}>
            <Text style={styles.textBtn}>{submit[language]}</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center', marginTop: scale(4)}}>
        <Image
          source={contactBanner}
          style={{width: scale(211), height: scale(133)}}
        />
      </View>
    </BackgroundTabSetting>
  );
}

const styles = StyleSheet.create({
  containBtn: {
    alignItems: 'center',
    marginTop: scale(8),
  },
  textBtn: {
    ...IBMPlexSans700,
    fontSize: scale(10),
    color: 'white',
    lineHeight: scale(12),
    paddingHorizontal: scale(24),
    paddingVertical: scale(8),
  },
  marginBottom: {
    marginBottom: scale(8),
  },
});

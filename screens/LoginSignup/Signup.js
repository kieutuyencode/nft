import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  loginNow,
  orSignup,
  signupBtn,
  signupQuestion,
  signupTitle,
} from '../../language/login-signup';
import {
  IBMPlexSans400,
  IBMPlexSans500,
  IBMPlexSans600,
  IBMPlexSans700,
} from '../../variable/fontFamily';
import {
  customFontsize,
  customHeight,
  customMarginBottom,
  customMarginHorizontal,
  customMarginLeft,
  customMarginTop,
  customWidth,
} from '../../variable/sizes';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {currentLanguage} from '../../store/language';
import ListInputSignup from './components/ListInputSignup';
import Container from './components/Container';
import Button1 from '../../components/buttons/Button1';
import CheckBox from './components/CheckBox';
import {primary} from '../../variable/colors';
import {iconFa, iconGoogle} from '../../variable/images';

export default function Signup() {
  const language = useSelector(currentLanguage);
  const {navigate} = useNavigation();

  return (
    <Container>
      <View style={{marginTop: 40, alignItems: 'center'}}>
        <Text style={[IBMPlexSans600, customFontsize(24), styles.colorText]}>
          {signupTitle[language]}
        </Text>
      </View>
      <View style={[customMarginTop(40), customMarginHorizontal(20)]}>
        <ListInputSignup />
        <CheckBox />
        <View style={{alignItems: 'center', ...customMarginBottom(24)}}>
          <Button1 text={signupBtn[language]} />
        </View>
        <View style={[styles.container, {marginBottom: 26}]}>
          <View style={{flex: 1}}>
            <Text style={[styles.colorText, styles.textBottom, IBMPlexSans400]}>
              {orSignup[language]}
            </Text>
            <View style={[styles.container, styles.bottom]}>
              <Image style={styles.image} source={iconGoogle} />
              <Image
                style={[styles.image, customMarginLeft(16)]}
                source={iconFa}
              />
            </View>
          </View>
          <View>
            <Text style={[styles.colorText, styles.textBottomRight]}>
              {signupQuestion[language]}
            </Text>
            <TouchableOpacity onPress={() => navigate('Login')}>
              <Text
                style={[
                  {color: primary},
                  styles.textBottomRight,
                  styles.bottom,
                  IBMPlexSans700,
                ]}>
                {loginNow[language]}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  colorText: {
    color: 'white',
  },
  forgot: {
    ...customFontsize(14),
    ...IBMPlexSans400,
    color: 'white',
  },
  change: {
    ...customFontsize(16),
    ...IBMPlexSans500,
    color: '#6F6D6D',
  },
  textBottom: {
    ...customFontsize(12),
  },
  textBottomRight: {
    ...customFontsize(12),
    ...IBMPlexSans500,
    textAlign: 'center',
  },
  container: {
    flexDirection: 'row',
  },
  bottom: {
    ...customMarginTop(10),
  },
  image: {
    ...customWidth(38),
    ...customHeight(56),
  },
});

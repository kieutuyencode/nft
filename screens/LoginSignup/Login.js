import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Logo from '../../variable/svgs/Logo';
import {currentLanguage} from '../../store/language';
import {
  changeQuestion,
  emailPlaceholder,
  forgotPass,
  loginBtn,
  loginTitle,
  passPlaceholder,
  signupTitle,
} from '../../language/login-signup';
import {
  IBMPlexSans400,
  IBMPlexSans500,
  IBMPlexSans600,
} from '../../variable/fontFamily';
import {
  customFontsize,
  customMarginBottom,
  customMarginHorizontal,
  customMarginTop,
} from '../../variable/sizes';
import Input1 from '../../components/inputs/Input1';
import Button1 from '../../components/buttons/Button1';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import Container from './components/Container';

export default function Login() {
  const language = useSelector(currentLanguage);
  const {navigate} = useNavigation();

  return (
    <Container>
      <View style={{marginTop: 36, alignItems: 'center'}}>
        <Logo />
        <Text style={[IBMPlexSans600, customFontsize(24), styles.colorText]}>
          {loginTitle[language]}
        </Text>
      </View>
      <View style={[customMarginTop(80), customMarginHorizontal(20)]}>
        <View style={styles.input}>
          <Input1
            placeholder={emailPlaceholder[language]}
            keyboardType="email-address"
          />
        </View>
        <Input1 placeholder={passPlaceholder[language]} password />
      </View>
      <View style={{alignItems: 'center', ...customMarginTop(21)}}>
        <Button1 text={loginBtn[language]} onPress={() => navigate('Home')} />
        <TouchableOpacity
          style={customMarginTop(23)}
          onPress={() => navigate('Forgot')}>
          <Text style={styles.forgot}>{forgotPass[language]}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={customMarginTop(195)}
          onPress={() => navigate('Signup')}>
          <Text style={styles.change}>
            {changeQuestion[language]}{' '}
            <Text style={styles.colorText}>{signupTitle[language]}</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  colorText: {
    color: 'white',
  },
  input: {
    ...customMarginBottom(16),
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
});

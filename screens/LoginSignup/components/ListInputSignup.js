import {View, StyleSheet} from 'react-native';
import {
  changeQuestion,
  confirmEmail,
  confirmPass,
  country,
  emailPlaceholder,
  forgotPass,
  loginBtn,
  passPlaceholder,
  refferal,
  signupTitle,
  userName,
} from '../../../language/login-signup';
import {useSelector} from 'react-redux';
import {currentLanguage} from '../../../store/language';
import {customMarginBottom} from '../../../variable/sizes';
import Input1 from '../../../components/inputs/Input1';

export default function ListInputSignup() {
  const language = useSelector(currentLanguage);

  return (
    <>
      <View style={styles.input}>
        <Input1
          placeholder={emailPlaceholder[language]}
          keyboardType="email-address"
        />
      </View>
      <View style={styles.input}>
        <Input1
          placeholder={confirmEmail[language]}
          keyboardType="email-address"
        />
      </View>
      <View style={styles.input}>
        <Input1 placeholder={userName[language]} />
      </View>
      <View style={styles.input}>
        <Input1 placeholder={passPlaceholder[language]} password />
      </View>
      <View style={styles.input}>
        <Input1 placeholder={confirmPass[language]} password />
      </View>
      <View style={styles.input}>
        <Input1 placeholder={country[language]} />
      </View>
      <Input1 placeholder={refferal[language]} />
    </>
  );
}
const styles = StyleSheet.create({
  input: {
    ...customMarginBottom(14),
  },
});

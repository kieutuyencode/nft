import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Container from './components/Container';
import Logo from '../../variable/svgs/Logo';
import {IBMPlexSans600} from '../../variable/fontFamily';
import {
  customFontsize,
  customMarginBottom,
  customMarginHorizontal,
  customMarginTop,
} from '../../variable/sizes';
import {useSelector} from 'react-redux';
import {currentLanguage} from '../../store/language';
import {
  confirmPassword,
  emailPlaceholder,
  newPass,
  password,
  submit,
} from '../../language/login-signup';
import Input1 from '../../components/inputs/Input1';
import Button1 from '../../components/buttons/Button1';

export default function NewPass() {
  const language = useSelector(currentLanguage);

  return (
    <Container>
      <View style={{marginTop: 36, alignItems: 'center'}}>
        <Logo />
        <Text style={[IBMPlexSans600, customFontsize(24), styles.colorText]}>
          {newPass[language]}
        </Text>
      </View>
      <View
        style={[
          customMarginTop(82),
          customMarginBottom(23),
          customMarginHorizontal(20),
        ]}>
        <View style={customMarginBottom(14)}>
          <Input1 placeholder={password[language]} password />
        </View>
        <Input1 placeholder={confirmPassword[language]} password />
      </View>
      <View style={{alignItems: 'center'}}>
        <Button1 text={submit[language]} />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  colorText: {
    color: 'white',
  },
});

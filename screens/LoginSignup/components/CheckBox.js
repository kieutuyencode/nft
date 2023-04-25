import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {View, Text, StyleSheet} from 'react-native';
import {primary} from '../../../variable/colors';
import {useSelector} from 'react-redux';
import {currentLanguage} from '../../../store/language';
import {
  customFontsize,
  customMarginVertical,
  scaleWidth,
} from '../../../variable/sizes';
import {Inter700} from '../../../variable/fontFamily';
import {
  agree1,
  agree2,
  agree3,
  agree4,
  agree5,
} from '../../../language/login-signup';

export default function CheckBox() {
  const language = useSelector(currentLanguage);
  return (
    <View style={styles.container}>
      <BouncyCheckbox
        size={16 * scaleWidth}
        fillColor={primary}
        unfillColor="#FFFFFF"
      />
      <View style={{flex: 1}}>
        <Text style={styles.text}>
          {agree1[language]}{' '}
          <Text style={styles.color}>{agree2[language]}</Text>{' '}
          {agree3[language]}{' '}
          <Text style={styles.color}>{agree4[language]}</Text>{' '}
          {agree5[language]}.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    ...customMarginVertical(23),
    alignItems: 'flex-start',
  },
  text: {
    color: 'white',
    ...customFontsize(12),
    ...Inter700,
    lineHeight: 18 * scaleWidth,
  },
  color: {
    color: primary,
  },
});

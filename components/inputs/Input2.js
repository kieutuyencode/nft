import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
import {IBMPlexSans400} from '../../variable/fontFamily';
import {scale} from '../../variable/sizes';
import LinearGradient from 'react-native-linear-gradient';
import {company2} from '../../variable/images';

export default function Input2({label, placeholder, number, img}) {
  return (
    <View>
      {label && <Text style={styles.text}>{label}</Text>}
      <LinearGradient
        colors={['rgba(255, 255, 255, 0.076)', 'rgba(143, 121, 217, 0.224)']}
        start={{x: 0.5, y: 0}}
        end={{x: 1, y: 1}}
        locations={[0.3392, 0.9986]}
        style={[
          styles.containInput,
          img && {
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: scale(10),
            columnGap: scale(6),
          },
        ]}>
        {img && (
          <Image
            source={company2}
            style={{width: scale(23), height: scale(23)}}
          />
        )}
        <TextInput
          placeholder={placeholder}
          style={styles.input}
          placeholderTextColor="white"
          keyboardType={number ? 'numeric' : 'default'}
        />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    ...IBMPlexSans400,
    fontSize: scale(14),
    color: 'white',
    marginBottom: scale(4),
    marginLeft: scale(12),
  },
  containInput: {
    borderRadius: 999,
    paddingHorizontal: scale(14),
  },
  input: {
    ...IBMPlexSans400,
    fontSize: scale(14),
    color: 'white',
    paddingVertical: scale(8),
  },
});

import {View, Text, StyleSheet, TextInput} from 'react-native';
import Card from './Card';
import {scale} from '../../../../../../variable/sizes';
import {
  IBMPlexSans400,
  IBMPlexSans700,
} from '../../../../../../variable/fontFamily';
import {
  loginRegister,
  message,
  noReview,
  review,
  reviewTitle,
  titleReview,
} from '../../../../../../language/home/main/nft/detail-market';
import {useLanguage} from '../../../../../../store/language';
import Button from '../../../../../../components/buttons/Button';

export default function Review() {
  const language = useLanguage();

  return (
    <View style={{marginTop: scale(24), marginBottom: scale(24)}}>
      <Card>
        <View style={styles.containHead}>
          <Text style={styles.text}>{review[language]}</Text>
          <Text style={[styles.text, {marginTop: scale(4), ...IBMPlexSans400}]}>
            {noReview[language]}
          </Text>
        </View>
        <View style={styles.content}>
          <Text
            style={[styles.text, {fontSize: scale(20), textAlign: 'center'}]}>
            {reviewTitle[language]}
          </Text>
          <TextInput
            style={[styles.input, styles.input1]}
            placeholder={titleReview[language]}
            placeholderTextColor="#536981"
          />
          <TextInput
            style={[styles.input, styles.input2]}
            placeholder={message[language]}
            placeholderTextColor="#536981"
          />
          <View style={{alignItems: 'center', marginTop: scale(20)}}>
            <Button
              text={loginRegister[language]}
              font={IBMPlexSans700}
              size={16}
              lineHeight={18}
              vertical={10}
              horizontal={40}
            />
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    ...IBMPlexSans700,
    fontSize: scale(14),
    color: 'white',
  },
  containHead: {
    paddingLeft: scale(25),
    paddingBottom: scale(20),
    marginTop: scale(12),
    borderBottomColor: 'rgba(255, 222, 227, 0.2)',
    borderBottomWidth: scale(1),
  },
  content: {
    paddingTop: scale(16),
    paddingBottom: scale(20),
    paddingHorizontal: scale(16),
  },
  input: {
    borderColor: '#EAEAEA',
    borderWidth: scale(1),
    backgroundColor: 'white',
    ...IBMPlexSans400,
    fontSize: scale(14),
    color: '#536981',
  },
  input1: {
    borderRadius: 999,
    marginTop: scale(12),
    paddingHorizontal: scale(14),
    paddingVertical: scale(6),
  },
  input2: {
    borderRadius: 13,
    marginTop: scale(12),
    paddingHorizontal: scale(14),
    paddingVertical: scale(6),
    height: scale(83),
  },
});

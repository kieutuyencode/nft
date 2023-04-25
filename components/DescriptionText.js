import {View, Text, StyleSheet} from 'react-native';
import {useLanguage} from '../store/language';
import {IBMPlexSans400, IBMPlexSans700} from '../variable/fontFamily';
import {scale} from '../variable/sizes';

export default function DescriptionText() {
  const language = useLanguage();

  return (
    <View>
      <Text style={styles.text}>
        {maxAvailable[language]} <Text style={styles.important}>0 USDT</Text>
      </Text>
      <Text style={styles.text}>{description1[language]}</Text>
      <Text style={styles.text}>{description2[language]}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    ...IBMPlexSans400,
    fontSize: scale(14),
    color: 'white',
  },
  important: {
    ...IBMPlexSans700,
    color: '#F40074',
  },
});

const maxAvailable = {
  en: 'Max available:',
  vn: 'Tối đa hiện có:',
};

const description1 = {
  en: 'The overhead fees are not fixed, subject to change depending on the state of the blockchain networks',
  vn: 'Phí trên không cố định, có thể thay đổi tùy thuộc vào trạng thái của mạng blockchain',
};

const description2 = {
  en: 'Estimated completion time: 2 minutes',
  vn: 'Thời gian hoàn thành ước tính: 2 phút',
};

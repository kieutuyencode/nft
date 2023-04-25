import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {scale} from '../../../../../../variable/sizes';
import {useState} from 'react';
import {useLanguage} from '../../../../../../store/language';
import {IBMPlexSans400} from '../../../../../../variable/fontFamily';

export default function Radio() {
  const [select, setSelect] = useState(0);
  const language = useLanguage();

  return (
    <View style={styles.container}>
      {[male[language], female[language]].map((item, index) => (
        <TouchableOpacity
          key={index}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            columnGap: scale(5),
          }}
          onPress={() => setSelect(index)}>
          <View
            style={[
              styles.round,
              index === select
                ? {backgroundColor: '#C80671'}
                : {borderWidth: scale(1), borderColor: 'white'},
            ]}></View>
          <Text style={styles.text}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: scale(24),
    columnGap: scale(16),
    flexDirection: 'row',
    marginLeft: scale(10),
    marginBottom: scale(26),
  },
  round: {width: scale(7), height: scale(7), borderRadius: 999},
  text: {
    ...IBMPlexSans400,
    fontSize: scale(14),
    color: 'white',
    lineHeight: scale(16),
  },
});

const male = {
  en: 'Male',
  vn: 'Nam',
};

const female = {
  en: 'Female',
  vn: 'Nữ',
};

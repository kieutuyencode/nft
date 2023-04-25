import {View, Text, StyleSheet} from 'react-native';
import Container from './Container';
import {scale} from '../../../../variable/sizes';
import {IBMPlexSans700} from '../../../../variable/fontFamily';

export default function Table({title, listLabel}) {
  return (
    <Container>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.containLabel}>
          {listLabel.map((label, index) => (
            <Text key={index} style={styles.label}>
              {label}
            </Text>
          ))}
        </View>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: scale(10),
    marginHorizontal: scale(25),
    height: scale(250),
  },
  title: {
    ...IBMPlexSans700,
    fontSize: scale(16),
    color: 'white',
    marginLeft: scale(15),
  },
  containLabel: {
    flexDirection: 'row',
    marginTop: scale(10),
    columnGap: scale(30),
  },
  label: {
    ...IBMPlexSans700,
    fontSize: scale(13),
    color: 'white',
  },
});

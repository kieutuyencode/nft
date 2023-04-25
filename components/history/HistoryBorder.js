import {View, Text, StyleSheet} from 'react-native';
import {scale} from '../../variable/sizes';
import {IBMPlexSans400, Roboto700} from '../../variable/fontFamily';

export default function HistoryBorder({title, label1, label2}) {
  return (
    <View style={styles.container}>
      <View style={styles.containTitle}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.containLabel}>
        <Text style={styles.label}>#</Text>
        <Text style={styles.label}>{label1}</Text>
        <Text style={styles.label}>{label2}</Text>
        <Text style={styles.label}>...</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.row}></View>
        <View style={styles.row}></View>
        <View style={styles.row}></View>
        <View style={styles.row}></View>
        <View style={styles.row}></View>
        <View style={[styles.row, {borderWidth: 0}]}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: scale(1),
    borderRadius: 18,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    overflow: 'hidden',
  },
  title: {
    ...Roboto700,
    fontSize: scale(16),
    color: 'white',
    lineHeight: scale(18),
  },
  containTitle: {
    paddingHorizontal: scale(30),
    paddingBottom: scale(14),
    paddingTop: scale(12),
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  containLabel: {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    paddingHorizontal: scale(30),
    flexDirection: 'row',
    paddingBottom: scale(14),
    paddingTop: scale(12),
    columnGap: scale(30),
  },
  label: {
    ...IBMPlexSans400,
    fontSize: scale(14),
    color: 'white',
    lineHeight: scale(17),
  },
  content: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  row: {
    borderBottomWidth: scale(1),
    borderColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: scale(30),
    paddingVertical: scale(18),
  },
});

import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {scale} from '../../../../../../variable/sizes';
import {Rectangle} from '../../../../../../variable/images';
import Item from './Item';

export default function ListItem() {
  return (
    <LinearGradient
      colors={['rgba(80, 45, 159, 0.4)', 'rgba(8, 2, 28, 0)']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      locations={[0.3392, 0.9986]}
      style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scroll}>
        <Item type="Classic" />
        <Item type="Gold" />
      </ScrollView>
      <Image source={Rectangle} style={styles.rectangle} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: scale(16),
    paddingBottom: scale(24),
    position: 'relative',
  },
  rectangle: {
    position: 'absolute',
    bottom: 0,
    left: scale(27),
    width: scale(103),
    height: scale(5),
    borderRadius: 999,
  },
  scroll: {
    paddingHorizontal: scale(20),
    columnGap: scale(14),
  },
});

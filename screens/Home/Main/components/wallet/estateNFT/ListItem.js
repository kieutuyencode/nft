import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React from 'react';
import {Rectangle, bannerReal} from '../../../../../../variable/images';
import {scale} from '../../../../../../variable/sizes';
import Item from './Item';
import {useLanguage} from '../../../../../../store/language';
import {stage1} from '../../../../../../language/home/main/wallet/estate-NFT';
import {IBMPlexSans700} from '../../../../../../variable/fontFamily';

export default function ListItem() {
  const language = useLanguage();

  return (
    <View style={styles.container}>
      <Image source={bannerReal} style={styles.image} />
      <Image source={Rectangle} style={styles.rectangle} />
      <View style={styles.list}>
        <ScrollView
          horizontal
          contentContainerStyle={{
            paddingHorizontal: scale(20),
            paddingBottom: scale(16),
            columnGap: scale(20),
          }}>
          {data.map((item, index) => (
            <Item
              key={index}
              money={item.money}
              text1={item.text1[language]}
              text2={item.text2[language]}
            />
          ))}
        </ScrollView>
        <Text style={styles.stage}>{stage1[language]}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginTop: scale(40),
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: scale(283),
  },
  rectangle: {
    position: 'absolute',
    bottom: 0,
    left: scale(28),
    width: scale(103),
    height: scale(5),
    borderRadius: 999,
  },
  list: {
    position: 'absolute',
  },
  stage: {
    ...IBMPlexSans700,
    fontSize: scale(20),
    color: 'white',
    marginLeft: scale(72),
  },
});

const data = [
  {
    money: '$200',
    text1: {en: 'November 2022', vn: 'Tháng 11 Năm 2022'},
    text2: {en: 'MAX 1,000', vn: 'TỐI ĐA 1,000'},
  },
  {
    money: '$300',
    text1: {en: 'January 2023', vn: 'Tháng 1 Năm 2023'},
    text2: {en: 'MAX 4,000', vn: 'TỐI ĐA 4,000'},
  },
  {
    money: '$500',
    text1: {en: 'March 2023', vn: 'Tháng 3 Năm 2023'},
    text2: {en: 'MAX 5,000', vn: 'TỐI ĐA 5,000'},
  },
  {
    money: '$800',
    text1: {en: 'April 2023', vn: 'Tháng 4 Năm 2023'},
    text2: {en: 'MAX 20,000', vn: 'TỐI ĐA 20,000'},
  },
  {
    money: '$1200',
    text1: {en: 'July 2023', vn: 'Tháng 7 Năm 2023'},
    text2: {en: 'MAX 20,000', vn: 'TỐI ĐA 20,000'},
  },
  {
    money: '$1600',
    text1: {en: 'August 2023', vn: 'Tháng 8 Năm 2023'},
    text2: {en: 'MAX 20,000', vn: 'TỐI ĐA 20,000'},
  },
  {
    money: '$2000',
    text1: {en: 'January 2023', vn: 'Tháng 1 Năm 2023'},
    text2: {en: 'MAX 30,000', vn: 'TỐI ĐA 30,000'},
  },
];

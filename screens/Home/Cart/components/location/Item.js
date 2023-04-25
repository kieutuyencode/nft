import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {imgLocation} from '../../../../../variable/images';
import {scale} from '../../../../../variable/sizes';
import {
  IBMPlexSans400,
  IBMPlexSans700,
} from '../../../../../variable/fontFamily';
import Star2 from '../../../../../variable/svgs/Star2';
import {useLanguage} from '../../../../../store/language';
import Button from '../../../../../components/buttons/Button';

export default function Item({title, address, star}) {
  const language = useLanguage();

  return (
    <View style={styles.container}>
      <Image source={imgLocation} style={styles.img} />
      <View style={styles.content}>
        <View style={{position: 'relative', alignItems: 'center'}}>
          <Text style={styles.title}>{title}</Text>
          <Text style={[styles.title, styles.address]}>{address}</Text>
          <View style={styles.containStar}>
            {[...Array(Math.floor(star))].map((item, index) => (
              <Star2 key={index} />
            ))}
          </View>
          <TouchableOpacity style={styles.absolute}>
            <Text style={styles.detail}>{detail[language]}</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: scale(10)}}>
          <Button
            text={sell[language]}
            font={IBMPlexSans700}
            size={14}
            lineHeight={18}
            vertical={2}
            horizontal={30}
            angle
            borderNone
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(8, 2, 28, 0.8)',
    borderRadius: 16,
    overflow: 'hidden',
    paddingHorizontal: scale(5),
    paddingTop: scale(5),
    paddingBottom: scale(2),
    width: (scale(375) - scale(30 * 2) - scale(18)) / 2,
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: scale(5),
  },
  img: {
    width: '100%',
    height: scale(89),
    borderRadius: 10,
  },
  title: {
    ...IBMPlexSans700,
    fontSize: scale(13),
    color: 'white',
    textAlign: 'center',
  },
  address: {
    fontSize: scale(7),
    marginTop: scale(1),
    marginBottom: scale(2),
  },
  containStar: {
    flexDirection: 'row',
    gap: scale(1),
    alignItems: 'center',
  },
  detail: {
    ...IBMPlexSans400,
    fontSize: scale(7),
    color: 'white',
    lineHeight: scale(9),
  },
  absolute: {
    position: 'absolute',
    right: scale(0),
    bottom: scale(0.5),
  },
});

const detail = {
  en: 'Detail',
  vn: 'Chi tiết',
};

const sell = {
  en: 'SELL',
  vn: 'BÁN',
};

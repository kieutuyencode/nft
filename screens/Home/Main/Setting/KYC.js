import Modal from '../components/setting/authenCode/Modal';
import {useLanguage} from '../../../../store/language';
import Input from '../components/setting/authenCode/Input';
import {StyleSheet, View} from 'react-native';
import {scale} from '../../../../variable/sizes';
import Radio from '../components/setting/kyc/Radio';
import Upload from '../components/setting/kyc/Upload';

export default function KYC() {
  const language = useLanguage();

  return (
    <Modal title={'KYC'} text={send[language]}>
      <View style={styles.marginBottom}>
        <Input placeholder={fname[language]} />
      </View>
      <View style={styles.marginBottom}>
        <Input placeholder={lname[language]} />
      </View>
      <View style={styles.marginBottom}>
        <Input placeholder={country[language]} />
      </View>
      <Input placeholder={passport[language]} />
      <Radio />
      <View style={styles.marginBottom}>
        <Upload text={front[language]} />
      </View>
      <View style={styles.marginBottom}>
        <Upload text={back[language]} />
      </View>
      <Upload text={full[language]} />
    </Modal>
  );
}

const styles = StyleSheet.create({marginBottom: {marginBottom: scale(11)}});

const front = {
  en: 'Upload a photo of ID card (Front)',
  vn: 'Tải ảnh chụp CMND (Mặt trước)',
};

const back = {
  en: 'Upload a photo of ID card (Back)',
  vn: 'Tải ảnh chụp CMND (Mặt sau)',
};

const full = {
  en: 'Upload a full face photo',
  vn: 'Tải lên một bức ảnh đầy đủ khuôn mặt',
};

const send = {
  en: 'Send',
  vn: 'Gửi',
};

const fname = {
  en: 'Firstname',
  vn: 'Tên đầu',
};

const lname = {
  en: 'Lastname',
  vn: 'Tên cuối',
};

const country = {
  en: 'Country',
  vn: 'Quốc gia',
};

const passport = {
  en: 'Passport',
  vn: 'Hộ chiếu',
};

import Modal from '../components/setting/authenCode/Modal';
import {useLanguage} from '../../../../store/language';
import Input from '../components/setting/authenCode/Input';
import {StyleSheet, View} from 'react-native';
import {scale} from '../../../../variable/sizes';

export default function ChangePass() {
  const language = useLanguage();

  return (
    <Modal title={title[language]} text={accept[language]}>
      <View style={styles.marginBottom}>
        <Input placeholder={oldPw[language]} />
      </View>
      <View style={styles.marginBottom}>
        <Input placeholder={newPw[language]} />
      </View>
      <Input placeholder={retype[language]} />
    </Modal>
  );
}

const styles = StyleSheet.create({marginBottom: {marginBottom: scale(11)}});

const title = {
  en: 'Change Password',
  vn: 'Đổi Mật Khẩu',
};

const accept = {
  en: 'Accept',
  vn: 'Đồng ý',
};

const oldPw = {
  en: 'Old password',
  vn: 'Mật khẩu cũ',
};

const newPw = {
  en: 'New password',
  vn: 'Mật khẩu mới',
};

const retype = {
  en: 'Retype password',
  vn: 'Nhập lại mật khẩu',
};

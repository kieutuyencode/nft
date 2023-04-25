import Modal from '../components/setting/authenCode/Modal';
import {useLanguage} from '../../../../store/language';
import Input from '../components/setting/authenCode/Input';

export default function AuthenCode() {
  const language = useLanguage();

  return (
    <Modal title={title[language]} text={enable[language]}>
      <Input />
    </Modal>
  );
}

const title = {
  en: 'Authenticator Code',
  vn: 'Mã Xác Nhận',
};

const enable = {
  en: 'Enabled 2FA',
  vn: 'Bật 2FA',
};

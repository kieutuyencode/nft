import {
  amount,
  content,
  empty,
  time,
  title,
} from '../../../language/home/earning/history-referral';
import {useLanguage} from '../../../store/language';
import Table from './components/Table';

export default function HistoryReferral() {
  const language = useLanguage();

  return (
    <Table
      title={title[language]}
      listLabel={[
        '#',
        amount[language],
        content[language],
        time[language],
        empty[language],
      ]}
    />
  );
}

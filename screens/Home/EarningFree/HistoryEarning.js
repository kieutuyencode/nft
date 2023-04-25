import {
  amount,
  location,
  time,
  title,
} from '../../../language/home/earning/history-earning';
import {useLanguage} from '../../../store/language';
import Table from './components/Table';

export default function HistoryEarning() {
  const language = useLanguage();

  return (
    <Table
      title={title[language]}
      listLabel={['#', location[language], time[language], amount[language]]}
    />
  );
}

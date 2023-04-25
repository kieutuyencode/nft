import {
  amount,
  description,
  time,
  title,
} from '../../../language/home/earning/history-location';
import {useLanguage} from '../../../store/language';
import Table from './components/Table';

export default function HistoryLocation() {
  const language = useLanguage();

  return (
    <Table
      title={title[language]}
      listLabel={['#', description[language], amount[language], time[language]]}
    />
  );
}

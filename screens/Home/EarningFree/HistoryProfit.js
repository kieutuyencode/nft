import {
  amount,
  name,
  time,
  title,
} from '../../../language/home/earning/history-profit';
import {useLanguage} from '../../../store/language';
import Table from './components/Table';

export default function HistoryProfit() {
  const language = useLanguage();

  return (
    <Table
      title={title[language]}
      listLabel={['#', name[language], amount[language], time[language]]}
    />
  );
}

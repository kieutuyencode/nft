import {
  duration,
  price,
  speed,
  time,
  title,
} from '../../../language/home/earning/history-machine';
import {useLanguage} from '../../../store/language';
import Table from './components/Table';

export default function HistoryMachine() {
  const language = useLanguage();

  return (
    <Table
      title={title[language]}
      listLabel={[
        '#',
        price[language],
        speed[language],
        duration[language],
        time[language],
      ]}
    />
  );
}

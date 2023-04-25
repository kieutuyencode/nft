import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './Main';
import HistoryEarning from './HistoryEarning';
import HistoryProfit from './HistoryProfit';
import HistoryReferral from './HistoryReferral';
import HistoryLocation from './HistoryLocation';
import HistoryMachine from './HistoryMachine';

const Stack = createNativeStackNavigator();

export default function EarningFree() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="HistoryEarning" component={HistoryEarning} />
      <Stack.Screen name="HistoryProfit" component={HistoryProfit} />
      <Stack.Screen name="HistoryReferral" component={HistoryReferral} />
      <Stack.Screen name="HistoryLocation" component={HistoryLocation} />
      <Stack.Screen name="HistoryMachine" component={HistoryMachine} />
    </Stack.Navigator>
  );
}

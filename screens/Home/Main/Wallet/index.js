import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import DetailBlance from './DetailBlance';
import Detail from './Detail';
import Deposit from './Deposit';
import Transfer from './Transfer';
import WithDraw from './WithDraw';
import EstateNFT from './EstateNFT';
import EstateDetail from './EstateDetail';

const Stack = createNativeStackNavigator();

export default function Wallet() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="DetailBlance" component={DetailBlance} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Deposit" component={Deposit} />
      <Stack.Screen name="WithDraw" component={WithDraw} />
      <Stack.Screen name="Transfer" component={Transfer} />
      <Stack.Screen name="EstateNFT" component={EstateNFT} />
      <Stack.Screen name="EstateDetail" component={EstateDetail} />
    </Stack.Navigator>
  );
}

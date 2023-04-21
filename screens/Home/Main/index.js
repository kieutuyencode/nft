import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Wallet from './Wallet';
import WalletIcon from '../../../variable/svgs/Wallet';
import Nft from './Nft';
import Swap from './Swap';
import Profile from './Profile';
import TabBarBottom from './components/TabBarBottom';
import NftIcon from '../../../variable/svgs/Nft';
import SwapIcon from '../../../variable/svgs/Swap';
import SettingIcon from '../../../variable/svgs/Setting';
import Setting from './Setting';
import ProfileIcon from '../../../variable/svgs/Profile';
import {useLanguage} from '../../../store/language';
import {
  profile,
  setting,
  swap,
  wallet,
} from '../../../language/home/main/tabbar-bottom';

const Tab = createBottomTabNavigator();

export default function Main() {
  const language = useLanguage();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <TabBarBottom {...props} />}>
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarIcon: () => <WalletIcon />,
          tabBarLabel: wallet[language],
        }}
      />
      <Tab.Screen
        name="NFT"
        component={Nft}
        options={{tabBarIcon: () => <NftIcon />}}
      />
      <Tab.Screen
        name="Swap"
        component={Swap}
        options={{tabBarIcon: () => <SwapIcon />, tabBarLabel: swap[language]}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => <ProfileIcon />,
          tabBarLabel: profile[language],
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: () => <SettingIcon />,
          tabBarLabel: setting[language],
        }}
      />
    </Tab.Navigator>
  );
}

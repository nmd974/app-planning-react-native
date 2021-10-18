import * as React from 'react';
import {Image} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Compteur from '../../screens/Compteur/Compteur';
import Home from '../../screens/Home/Home';
import Profile from '../../screens/Profile/Profile';

const Tab = createBottomTabNavigator();
const MyTheme = {
  dark: true,
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'red',
  },
};

const Screens = props => {
  let nameHeaderBar = props.data.last_name + ' ' + props.data.first_name;
  return (
    <Tab.Navigator
      initialRouteName="Accueil"
      screenOptions={{
        tabBarActiveTintColor: '#2c3e50',
      }}>
      <Tab.Screen
        name="Accueil"
        children={() => <Home data={props} />}
        options={{
          headerLeft: () => (
            <Image
              style={{width: 30, height: 30, margin: 20}}
              source={require('../UIElements/Edu_Plan_(1).png')}
            />
          ),
          title: nameHeaderBar,
          tabBarLabel: 'Accueil',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Compteur"
        component={Compteur}
        options={{
          headerLeft: () => (
            <Image
              style={{width: 30, height: 30, margin: 20}}
              source={require('../UIElements/Edu_Plan_(1).png')}
            />
          ),
          title: nameHeaderBar,
          tabBarLabel: 'Compteur',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="av-timer" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={Profile}
        options={{
          headerLeft: () => (
            <Image
              style={{width: 30, height: 30, margin: 20}}
              source={require('../UIElements/Edu_Plan_(1).png')}
            />
          ),
          title: nameHeaderBar,
          tabBarLabel: 'Profil',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Navigation = props => {
  // console.log(DefaultTheme);
  return (
    <NavigationContainer theme={MyTheme}>
      <Screens data={props.data} />
    </NavigationContainer>
  );
};

export default Navigation;

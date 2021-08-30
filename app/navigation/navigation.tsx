import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '../screens/home/home.screen'
import SettingsScreen from '../screens/settings/settings.screen'
import {Alert, Button, Image, Text, TouchableOpacity, View} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import IoniconsIcon from 'react-native-vector-icons/Ionicons'
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome5'
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer'
import {useColorScheme} from 'react-native'

const Drawer = createDrawerNavigator()

const Stack = createStackNavigator()

const LogoTitle = (props: any) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Text
        style={{
          fontSize: 18,
          color: '#fff',
          fontWeight: '600',
          fontFamily: 'Roboto-Medium',
        }}>
        JexpoPrep
      </Text>
    </View>
  )
}

const MenuContent: React.FunctionComponent<DrawerContentComponentProps> = (
  props,
) => {
  return (
    <DrawerContentScrollView {...props}>
      <Image
        resizeMode="cover"
        style={{width: '100%', height: 140, marginTop: -5}}
        source={require('../assets/images/drawer-background.jpg')}
      />
      <DrawerItemList {...props} />
      {/* <DrawerItem
        icon={(props) => <IoniconsIcon name="home-sharp" size={18} />}
        label="Home"
        labelStyle={{
          fontSize: 14,
          fontFamily: 'Roboto-SemiBold',
        }}
        onPress={() => {}}
      />
      <DrawerItem
        icon={(props) => <IoniconsIcon name="book-sharp" size={18} />}
        label="Syllabus"
        labelStyle={{
          fontSize: 14,
          fontFamily: 'Roboto-SemiBold',
        }}
        onPress={() => {}}
      />
      <DrawerItem
        icon={(props) => <FontAwesomeIcons name="history" size={18} />}
        label="Previous Year Questions"
        labelStyle={{
          fontSize: 14,
          fontFamily: 'Roboto-SemiBold',
        }}
        onPress={() => {}}
      />
      <DrawerItem
        icon={(props) => <IoniconsIcon name="stopwatch-sharp" size={18} />}
        label="Practice Set"
        labelStyle={{
          fontSize: 14,
          fontFamily: 'Roboto-SemiBold',
        }}
        onPress={() => {}}
      />
      <DrawerItem
        icon={(props) => <IoniconsIcon name="trophy-sharp" size={18} />}
        label="Mock Test"
        labelStyle={{
          fontSize: 14,
          fontFamily: 'Roboto-SemiBold',
        }}
        onPress={() => {}}
      />
      <DrawerItem
        icon={(props) => <FontAwesomeIcons name="building" size={18} />}
        label="College List"
        labelStyle={{
          fontSize: 14,
          fontFamily: 'Roboto-SemiBold',
        }}
        onPress={() => {}}
      />
      <DrawerItem
        icon={(props) => <IoniconsIcon name="settings-sharp" size={18} />}
        label="Settings"
        labelStyle={{
          fontSize: 14,
          fontFamily: 'Roboto-SemiBold',
        }}
        onPress={() => {}}
      /> */}
      {/* </DrawerItemList> */}
    </DrawerContentScrollView>
  )
}

const StackNavigator = ({navigation}: any) => {
  const isDarkMode = useColorScheme() === 'dark'
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {backgroundColor: '#0A81AB', elevation: 0},
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: (props) => <LogoTitle {...props} />,
          headerRight: () => (
            <TouchableOpacity style={{marginRight: 12}}>
              {/* <MaterialIcons name="notifications" size={22} color="#fff" /> */}
              {isDarkMode && (
                <IoniconsIcon name="sunny" size={20} color="#fff" />
              )}
              {!isDarkMode && (
                <IoniconsIcon name="moon" size={20} color="#fff" />
              )}
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity
              style={{marginLeft: 12}}
              onPress={() => navigation.toggleDrawer()}>
              <Icon name="menu" size={26} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Profile"
        component={SettingsScreen}
        options={{
          title: 'My profile',
        }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  )
}

const RootNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeBackgroundColor: '#5cb2d1',
        activeTintColor: '#ffffff',
      }}
      drawerContent={(props) => <MenuContent {...props} />}
      initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={StackNavigator}
        options={{
          drawerIcon: (props) => (
            <IoniconsIcon
              name="home-sharp"
              size={18}
              color={props.focused ? '#fff' : '#000'}
            />
          ),
        }}
      />
      {/* <Drawer.Screen name="Home" component={StackNavigator} /> */}
      <Drawer.Screen
        name="Syllabus"
        component={StackNavigator}
        options={{
          drawerIcon: (props) => (
            <IoniconsIcon
              name="book-sharp"
              size={18}
              color={props.focused ? '#fff' : '#000'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Previous Year Questions"
        component={StackNavigator}
        options={{
          drawerIcon: (props) => (
            <FontAwesomeIcons
              name="history"
              size={18}
              color={props.focused ? '#fff' : '#000'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Practice Set"
        component={StackNavigator}
        options={{
          drawerIcon: (props) => (
            <IoniconsIcon
              name="stopwatch-sharp"
              size={18}
              color={props.focused ? '#fff' : '#000'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Mock Test"
        component={StackNavigator}
        options={{
          drawerIcon: (props) => (
            <IoniconsIcon
              name="trophy-sharp"
              size={18}
              color={props.focused ? '#fff' : '#000'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="College List"
        component={StackNavigator}
        options={{
          drawerIcon: (props) => (
            <FontAwesomeIcons
              name="building"
              size={18}
              color={props.focused ? '#fff' : '#000'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          drawerIcon: (props) => (
            <IoniconsIcon
              name="settings-sharp"
              size={18}
              color={props.focused ? '#fff' : '#000'}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  )
}

export default RootNavigator

import React, {useContext} from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '../screens/home/home.screen'
import SettingsScreen from '../screens/settings/settings.screen'
import {Image, Text, TouchableOpacity, useColorScheme, View} from 'react-native'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IoniconsIcon from 'react-native-vector-icons/Ionicons'
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome5'
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer'
import useDarkMode from '../hooks/useDarkMode'
import {ThemeContext} from 'styled-components/native'
import {Icon} from '../components/icon/icon.component'
import Notification from '../screens/notification/notification.screen'
import TrackProgress from '../screens/track-progress/track-progress.screen'

const Drawer = createDrawerNavigator()

const Stack = createStackNavigator()

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import MathematicsSyllabus from '../screens/syllabus/mathematics.syllabus.screen'
import PhysicsSyllabus from '../screens/syllabus/physics.syllabus.screen'
import ChemistrySyllabus from '../screens/syllabus/chemistry.syllabus.screen'
import AsyncStorage from '@react-native-async-storage/async-storage'
import OnBoard from '../screens/onboard/onboard.screen'

const Tab = createMaterialTopTabNavigator()

const SyllabusTab = () => {
  const theme = useContext(ThemeContext)
  return (
    <Tab.Navigator
      initialRouteName="MathematicsSyllabus"
      backBehavior="initialRoute"
      tabBarOptions={{
        labelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
          color: theme.colors.white,
        },
        style: {backgroundColor: theme.colors.primary},
        indicatorStyle: {backgroundColor: theme.colors.white},
      }}>
      <Tab.Screen
        name="MathematicsSyllabus"
        component={MathematicsSyllabus}
        options={{
          tabBarLabel: 'Mathematics',
          tabBarIcon: (props) => (
            <FontAwesomeIcons name="building" size={18} color={'red'} />
          ),
        }}
      />
      <Tab.Screen
        name="PhysicsSyllabus"
        component={PhysicsSyllabus}
        options={{tabBarLabel: 'Physics'}}
      />
      <Tab.Screen
        name="ChemistrySyllabus"
        component={ChemistrySyllabus}
        options={{tabBarLabel: 'Chemistry'}}
      />
    </Tab.Navigator>
  )
}

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
  const {isDarkMode, setIsDarkMode} = useDarkMode()

  const [isOnBoarded, setIsOnBoarded] = React.useState<boolean>(false)

  const theme = useContext(ThemeContext)

  async function getToken() {
    try {
      let onBoardData = await AsyncStorage.getItem('isOnBoarded')
      setIsOnBoarded(!!onBoardData)
      console.log(onBoardData)
    } catch (error) {
      console.log('Something went wrong', error)
    }
  }

  React.useLayoutEffect(() => {
    getToken()
  })

  return (
    <Stack.Navigator
      initialRouteName={'Home'}
      headerMode="screen"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {backgroundColor: theme.colors.primary, elevation: 0},
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: (props) => <LogoTitle {...props} />,
          headerRight: () => (
            <TouchableOpacity
              style={{marginRight: 12}}
              onPress={() => navigation.navigate('Notification')}>
              <Icon
                name="notifications"
                family="materialIcon"
                color="white"
                size={22}
              />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity
              style={{marginLeft: 12}}
              onPress={() => navigation.toggleDrawer()}>
              <Icon
                name="menu"
                family="materialCommunityIcon"
                color="white"
                size={26}
              />
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
        name="Notification"
        component={Notification}
        options={{
          title: 'Notifications',
        }}
      />
      <Stack.Screen
        name="TrackProgress"
        component={TrackProgress}
        options={{
          title: 'TrackProgress',
          headerTitleStyle: {fontSize: 18},
        }}
      />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen
        name="OnBoard"
        component={OnBoard}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  )
}

const RootNavigator = () => {
  const theme = useContext(ThemeContext)
  const colorScheme = useColorScheme()

  const focusedColor = theme.colors.white
  const unFocusedColor =
    colorScheme === 'dark' ? theme.colors.white : theme.colors.black

  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: theme.colors.background,
      }}
      drawerContentOptions={{
        activeBackgroundColor: theme.colors.primary,
        activeTintColor: theme.colors.white,
        inactiveTintColor: theme.colors.headingText,
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
              color={props.focused ? focusedColor : unFocusedColor}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Syllabus"
        component={SyllabusTab}
        options={{
          drawerIcon: (props) => (
            <IoniconsIcon
              name="book-sharp"
              size={18}
              color={props.focused ? focusedColor : unFocusedColor}
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
              color={props.focused ? focusedColor : unFocusedColor}
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
              color={props.focused ? focusedColor : unFocusedColor}
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
              color={props.focused ? focusedColor : unFocusedColor}
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
              color={props.focused ? focusedColor : unFocusedColor}
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
              color={props.focused ? focusedColor : unFocusedColor}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  )
}

export default RootNavigator

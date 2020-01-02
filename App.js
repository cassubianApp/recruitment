import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { IconButton, Colors, Drawer as DrawerPaper } from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';
import { PersistGate } from 'redux-persist/integration/react';
import createFilter from 'redux-persist-transform-filter';

//navigation
import { NavigationNativeContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

//containers
import Login from './src/Login';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

//components
import Home from './src/Home';
import Profile from './src/Profile';

//actions
import { Logout } from './actions';

//store
import rootReducer from './reducers';

const myFilter = createFilter('profile');

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  transforms: [myFilter],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
let store = createStore(persistedReducer, undefined);

let persistor = persistStore(store);

const App = connect(
  state => ({
    token: state.profile.token
  }),
  (dispatch) => ({
    logout: () => dispatch(Logout())
  })
)(({token, logout}) => {

  const { t } = useTranslation();

  useEffect(() => SplashScreen.hide(), []);
  
  if(token === undefined || token === null)
    return <Login />;
  else return (
    <Drawer.Navigator
      drawerContentOptions={{
          activeTintColor: 'white',
          inactiveTintColor: 'white',
          itemStyle: { marginVertical: 3, marginHorizontal: 0, fontWeight: 'bold' },
          activeBackgroundColor: 'none'
      }}
      initialRouteName='HomeScreen'
    >
      <Drawer.Screen 
        name="HomeScreen"
        options={{
            title: () => (
              <DrawerPaper.Item
                style={{color: Colors.amber100}}
                label={t('home')}
              />
            ),
        }}
        component={({navigation}) => (
            <Stack.Navigator>
                <Stack.Screen  
                    name="Home"
                    options={{
                        headerLeft: () => (
                          <IconButton
                            icon="menu"
                            color={Colors.grey700}
                            size={26}
                            onPress={() => navigation.openDrawer()}
                          />
                        ),
                        headerRight: () => (
                          <IconButton
                            icon="logout"
                            color={Colors.red500}
                            size={30}
                            onPress={() => logout()}
                          />
                        ),
                        headerStyle: {
                            backgroundColor: 'white'
                        },
                        title: t('home'),
                        headerTitleStyle: {
                            marginLeft: 0,
                        },
                        headerTintColor: 'rgba(0,0,0,0.7)',
                    }}
                    component={() => <Home />}
                />
            </Stack.Navigator>
        )}
      />
      <Drawer.Screen 
        name="ProfileScreen"
        options={{
            title: () => (
              <DrawerPaper.Item
                label={t('profile')}
              />
            ),
        }}
        component={({navigation}) => (
            <Stack.Navigator>
                <Stack.Screen  
                    name={'Profile'}
                    options={{
                        headerLeft: () => (
                          <IconButton
                            icon="menu"
                            color={Colors.grey700}
                            size={26}
                            onPress={() => navigation.openDrawer()}
                          />
                        ),
                        headerRight: () => (
                          <IconButton
                            icon="logout"
                            color={Colors.red500}
                            size={30}
                            onPress={() => logout()}
                          />
                        ),
                        headerStyle: {
                            backgroundColor: 'white'
                        },
                        title: t('profile'),
                        headerTitleStyle: {
                            marginLeft: 0,
                        },
                        headerTintColor: 'rgba(0,0,0,0.7)',
                    }}
                    component={() => <Profile />}
                />
            </Stack.Navigator>
        )}
      />
    </Drawer.Navigator>
  );
});

const AppContainer = () => {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationNativeContainer>
            <App />
        </NavigationNativeContainer>
      </PersistGate>
    </Provider>
  )
}

export default AppContainer;
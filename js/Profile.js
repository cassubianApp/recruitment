import React, { useState } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

//ui
import { BottomNavigation, Text, Avatar, TextInput, Button } from 'react-native-paper';
import normalize from 'react-native-normalize';

//actions
import { SaveNewUser } from '../actions';

const ProfileRoute = connect(
    state => ({
      user: state.profile.user
    })
  )(({user}) => {

    const { t } = useTranslation();

    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>{user.name}</Text>
            <Avatar.Image size={100} source={{uri: user.picture.url}} />
        </View>
    );
});

const EditRoute = connect(
    state => ({
      user: state.profile.user
    }),
    (dispatch) => ({
        SaveNewUser: (user) => dispatch(SaveNewUser(user))
    })
  )(({user, SaveNewUser}) => {

    const { t } = useTranslation();

    const [userForm, setUser] = useState({
        name: user.firstName,
        surname: user.lastName
    })

    return(
        <View style={{flex: 1}}>
            <TextInput
                label={t('name')}
                value={userForm.name}
                onChangeText={text => setUser({...userForm, name: text})}
            />
            <TextInput
                label={t('surname')}
                value={userForm.surname}
                onChangeText={text => setUser({...userForm, surname: text})}
            />
            <Button 
                style={{margin: normalize(10)}} 
                mode="contained" 
                onPress={() => {
                    SaveNewUser({lastName: userForm.name, firstName: userForm.surname});
                    alert(t('saveUserAlert'))
                }}>
                {t('save')}
            </Button>
        </View>
    );
});

export default () => {

    const { t } = useTranslation(),
    [state, setState] = useState({
        index: 0,
        routes: [
            { key: 'profil', title: t('profile'), icon: 'account' },
            { key: 'edit', title: t('editProfile'), icon: 'message' },
        ]
    }),
    renderScene = BottomNavigation.SceneMap({
        profil: ProfileRoute,
        edit: EditRoute
    }),
    handleIndexChange = index => setState({ ...state, index: index });

    return(
        <>
            <BottomNavigation
                navigationState={state}
                onIndexChange={handleIndexChange}
                renderScene={renderScene}
            />
        </>
    )
};
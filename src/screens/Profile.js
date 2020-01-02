import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

//ui
import { BottomNavigation } from 'react-native-paper';

//actions
import { SaveNewUser } from '../actions';

//components
import ProfileRoute from '../components/ProfileRoute';
import EditRoute from '../components/EditRoute';

export default connect(
    state => ({
      user: state.profile.user
    }),
    (dispatch) => ({
        SaveNewUser: (user) => dispatch(SaveNewUser(user))
    })
  )((props) => {

    const { t } = useTranslation(),
    [state, setState] = useState({
        index: 0,
        routes: [
            { key: 'profil', title: t('profile'), icon: 'account' },
            { key: 'edit', title: t('editProfile'), icon: 'message' },
        ]
    }),
    renderScene = BottomNavigation.SceneMap({
        profil: ProfileRoute(props),
        edit: EditRoute(props)
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
});
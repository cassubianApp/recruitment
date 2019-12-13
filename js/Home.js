import React from 'react';
import { 
    SafeAreaView
} from 'react-native';
import normalize from 'react-native-normalize';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

//sections
import HomeSectionOne from './HomeSectionOne';
import HomeSectionTwo from './HomeSectionTwo';

export default connect(
    state => ({
      user: state.profile.user
    })
  )(({user}) => {

    const { t } = useTranslation();

    return(
        <SafeAreaView style={{flex: 1, alignItems: 'center', paddingTop: normalize(40)}}>
            <HomeSectionOne user={user} />
            <HomeSectionTwo user={user} />
        </SafeAreaView>
    )
});
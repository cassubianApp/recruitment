import React from 'react';
import { 
    SafeAreaView
} from 'react-native';
import normalize from 'react-native-normalize';
import { connect } from 'react-redux';

//sections
import HomeSectionOne from './screens/HomeSectionOne';
import HomeSectionTwo from './screens/HomeSectionTwo';

//action
import { RandomPicture } from '../actions';

export default connect(
    state => ({
        user: state.profile.user,
        pictureId: state.home.pictureId
    }),
    (dispatch) => ({
        getNewPictureId: () => dispatch(RandomPicture())
    })
  )(({user, pictureId, getNewPictureId}) => {

    return(
        <SafeAreaView style={{flex: 1, alignItems: 'center', paddingTop: normalize(40)}}>
            <HomeSectionOne user={user} getNewPictureId={getNewPictureId} />
            <HomeSectionTwo user={user} pictureId={pictureId} />
        </SafeAreaView>
    )
});
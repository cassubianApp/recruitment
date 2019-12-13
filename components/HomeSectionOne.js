import React from 'react';
import {
    View
} from 'react-native';
import { useTranslation } from 'react-i18next';
import normalize from 'react-native-normalize';

//ui
import { Text, Avatar, Chip, Button } from 'react-native-paper';

export default ({user, getNewPictureId}) => {

    const { t } = useTranslation();

    return(
        <View style={{flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <Text>{t('hello')}</Text>
            <Chip 
                avatar={
                    <Avatar.Image size={24} source={{uri: user.picture.url}} />
                }
                mode='outlined'
            >
                {user.name}
            </Chip>
            <Button style={{marginTop:  normalize(10)}} icon="image" mode="contained" onPress={() => getNewPictureId()}>
                {t('randomPicture')}
            </Button>
        </View>
    )
};
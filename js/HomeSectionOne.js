import React from 'react';
import {
    View
} from 'react-native';
import { useTranslation } from 'react-i18next';

//ui
import { Text, Avatar, Chip } from 'react-native-paper';

export default ({user}) => {

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
        </View>
    )
};
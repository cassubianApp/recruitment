import React from 'react';
import {
    View, StyleSheet
} from 'react-native';
import { useTranslation } from 'react-i18next';
import normalize from 'react-native-normalize';

//ui
import { Text, Avatar, Chip, Button } from 'react-native-paper';

export default ({user, getNewPictureId}) => {

    const { t } = useTranslation();

    return(
        <View style={styles.container}>
            <Text>{t('hello')}</Text>
            <Chip 
                avatar={
                    <Avatar.Image size={24} source={{uri: user.picture.url}} />
                }
                mode='outlined'
            >
                {user.name}
            </Chip>
            <Button style={styles.button} icon="image" mode="contained" onPress={() => getNewPictureId()}>
                {t('randomPicture')}
            </Button>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center'},
    button: {marginTop:  normalize(10)},
});
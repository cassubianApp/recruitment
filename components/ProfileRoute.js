import React from 'react';
import { View } from 'react-native';
import { Text, Avatar } from 'react-native-paper';

export default ({user}) => {

    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>{user.name}</Text>
            <Avatar.Image size={100} source={{uri: user.picture.url}} />
        </View>
    );
};
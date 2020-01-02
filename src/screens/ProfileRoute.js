import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Avatar } from 'react-native-paper';

export default ({user}) => {

    return(
        <View style={styles.container}>
            <Text>{user.name}</Text>
            <Avatar.Image size={100} source={{uri: user.picture.url}} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
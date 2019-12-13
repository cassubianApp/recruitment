import React from 'react';
import {
    View
} from 'react-native';

//ui
import { Card, Title, Paragraph, Avatar } from 'react-native-paper';

export default ({user, pictureId}) => {

    return(
        <View style={{flex: 1, width: '100%'}}>
            <Card>
                <Card.Title title={user.firstName} subtitle={user.lastName} left={() => <Avatar.Image size={44} source={{uri: user.picture.url}} />} />
                <Card.Content>
                    <Title>{user.firstName}</Title>
                    <Paragraph>{user.lastName}</Paragraph>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/' + pictureId }} />
            </Card>
        </View>
    )
};
import React from 'react';
import {
    View, StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';

//ui
import { Card, Title, Paragraph, Avatar } from 'react-native-paper';

export default HomeSectionTwo = ({user, pictureId}) => {

    return(
        <View style={styles.container}>
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

const styles = StyleSheet.create({
    container: {flex: 1, width: '100%'},
});

HomeSectionTwo.propTypes = {
    user: PropTypes.object.isRequired,
    pictureId: PropTypes.number.isRequired,
};
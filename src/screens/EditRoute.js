import React from 'react';
import { View, StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import PropTypes from 'prop-types';

//ui
import { TextInput, Button } from 'react-native-paper';

export default EditUser = ({user, SaveNewUser}) => {

    const { t } = useTranslation();

    const [userForm, setUser] = useState({
        name: user.firstName,
        surname: user.lastName
    })

    return(
        <View style={StyleSheet.container}>
            <TextInput
                label={t('name')}
                value={userForm.name}
                onChangeText={text => setUser({...userForm, name: text})}
            />
            <TextInput
                label={t('surname')}
                value={userForm.surname}
                onChangeText={text => setUser({...userForm, surname: text})}
            />
            <Button 
                style={styles.button} 
                mode="contained" 
                onPress={() => {
                    SaveNewUser({lastName: userForm.name, firstName: userForm.surname});
                    alert(t('saveUserAlert'))
                }}>
                {t('save')}
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {flex: 1},
    button: {margin: normalize(10)},
});

EditUser.propTypes = {
    user: PropTypes.object.isRequired,
    SaveNewUser: PropTypes.func.isRequired,
};
import React from 'react';
import { View } from 'react-native';
import normalize from 'react-native-normalize';

//ui
import { TextInput, Button } from 'react-native-paper';

export default ({user, SaveNewUser}) => {

    const { t } = useTranslation();

    const [userForm, setUser] = useState({
        name: user.firstName,
        surname: user.lastName
    })

    return(
        <View style={{flex: 1}}>
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
                style={{margin: normalize(10)}} 
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
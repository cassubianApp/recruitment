import React from 'react';
import { 
    SafeAreaView 
} from 'react-native';
import { LoginButton, AccessToken,GraphRequest,GraphRequestManager } from 'react-native-fbsdk';

export default (props) => {

    return(
        <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <LoginButton
                onLoginFinished={
                    (error, result) => {
                        if (error) {
                            console.log("login has error: " + result.error);
                        } else if (result.isCancelled) {
                            console.log("login is cancelled.");
                        } else {
                            AccessToken.getCurrentAccessToken().then(
                                (data) => {
                                    const infoRequest = new GraphRequest(
                                        '/me?fields=name,picture,first_name,last_name', 
                                        null, 
                                        (error, result) => {
                                            
                                            props.login(
                                                data.accessToken.toString(), 
                                                {
                                                    id: result.id,
                                                    name: result.name,
                                                    lastName: result.last_name,
                                                    firstName: result.first_name,
                                                    picture: {
                                                        height: result.picture.data.height,
                                                        width: result.picture.data.width,
                                                        url: result.picture.data.url
                                                    }
                                                }
                                            );
                                        }
                                    );
                                    new GraphRequestManager().addRequest(infoRequest).start();
                                }
                            )
                        }
                    }
                }
            />
        </SafeAreaView>
    )
};
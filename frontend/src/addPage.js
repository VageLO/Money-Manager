import * as React from 'react';
import { StyleSheet, ScrollView, Dimensions, View } from 'react-native'
import { Surface, Text, useTheme} from 'react-native-paper';


const AddPage = () => {
    
    return (  
        < >
            <View style={styles().container}>
                <Text variant="headlineMedium">Add page!</Text>
            </View>   
        </>
    );
}


const styles = () => {
    const theme = useTheme()
    return StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.colors.background
        },
    });
}

export default AddPage;
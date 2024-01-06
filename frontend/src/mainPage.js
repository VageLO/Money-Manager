import * as React from 'react';
import { StyleSheet, ScrollView, Dimensions, View } from 'react-native'
import { Surface, Text, useTheme} from 'react-native-paper';

const CARD_WIDTH = Dimensions.get('window').width * 100 / 100

const MainPage = () => {
    const elevationValues =  Array.from({ length: 6 });
    const renderSurface = (index, mode) => (
        <Surface
          key={index}
          style={styles().surface}
          mode={mode}
        >
            <Text variant="bodyLarge">Account title</Text>
            <Text variant="bodyLarge">500 BYN</Text>
        </Surface>
      );
    return (  
        <View style={styles().container}>
            <View style={{height: 200}}>
                <ScrollView
                    horizontal // Change the direction to horizontal
                    pagingEnabled // Enable paging
                    decelerationRate={0} // Disable deceleration
                    snapToInterval={CARD_WIDTH} // Calculate the size for a card including marginLeft and marginRight
                    snapToAlignment='center' // Snap to the center
                    contentInset={{ // iOS ONLY
                        top: 0,
                        left: 0, // Left spacing for the very first card
                        bottom: 0,
                        right: 0 
                    }}
                >
                    {elevationValues.map((_, index) => renderSurface(index, 'elevated'))}
                </ScrollView>  
            </View>
        </View>
    );
}


const styles = () => {
    const theme = useTheme()
    return StyleSheet.create({
        container: {
            flex: 1,
            height: 200,
            alignItems: 'center',
            backgroundColor: theme.colors.background
        },
        surface: {
            justifyContent: 'center',
            height: '100%',
            paddingLeft: 10,
            width: CARD_WIDTH,
            alignItems: 'center',
            backgroundColor: theme.colors.backdrop
        },
    });
}

export default MainPage;
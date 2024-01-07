import {useState, useCallback} from 'react';
import { StyleSheet, View } from 'react-native'
import { Text, useTheme, TextInput, Button, RadioButton, TouchableRipple} from 'react-native-paper';
import { DatePickerModal } from 'react-native-paper-dates';
import ScreenWrapper from './components/screenWrapper.js';

const AddPage = () => {
    const theme = useTheme()

    const [amount, setAmount] = useState(''); 
    const [date, setDate] = useState(undefined); 
    const [open, setOpen] = useState(false);
    const [checked, setChecked] = useState('spend');

    const onDismissSingle = useCallback(() => {
        setOpen(false);
    }, [setOpen]);

    const onConfirmSingle = useCallback(
        (params) => {
            setOpen(false);
            setDate(params.date)},
        [setOpen, setDate]);

    const handleChange = (text) => { 
        const numericValue = text
            .replaceAll('.', ',')
            .split(",")
            .map((e,i) => i === 0 ? "0"+e : e)
            .filter(e => e)
            .splice(-2)
            .map(e => e.replace(/[^0-9.]/g, ''))
            .map((e, i) => i === 0 ? (+e || "0") : e.substr(0, 2)).join(","); 
        setAmount(numericValue); 
    }; 
    return (  
        <ScreenWrapper 
            withScrollView 
            contentContainerStyle={styles.contentConteiner} 
            >
            <TextInput // TODO: Разобраться с закрытием клавиатуры на нажатие в любой области
                textColor={theme.colors.surface}
                style={styles.textInput}
                label="Amount"
                onChangeText={setAmount}
                onEndEditing={(e) => handleChange(e.nativeEvent.text)}
                value={amount} 
                keyboardType="numbers-and-punctuation"
                placeholder="Type something"
            /> 
            <Button onPress={() => setOpen(true)} uppercase={false} mode="outlined">
                Pick date
            </Button>
            <DatePickerModal
                locale="en"
                mode="single"
                visible={open}
                onDismiss={onDismissSingle}
                date={date}
                onConfirm={onConfirmSingle}
            />
            <TouchableRipple onPress={() => setChecked('spend')}>
                <View style={styles.row}>
                    <Text>Списание</Text>
                    <View pointerEvents="none">
                        <RadioButton.Android
                        value="spend"
                        status={checked === 'spend' ? 'checked' : 'unchecked'}
                        />
                    </View>
                </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => setChecked('save')}>
                <View style={styles.row}>
                    <Text>Пополнение</Text>
                    <View pointerEvents="none">
                        <RadioButton.Android
                        value="save"
                        status={checked === 'save' ? 'checked' : 'unchecked'}
                        />
                    </View>
                </View>
            </TouchableRipple>
        </ScreenWrapper>  
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 8,
    },
    // contentConteiner: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    textInput: {
        flexDirection: 'row',
        marginBottom: 20
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
});

export default AddPage;
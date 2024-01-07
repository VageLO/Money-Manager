import {useState, useCallback} from 'react';
import { StyleSheet, TouchableWithoutFeedback, Keyboard, View } from 'react-native'
import { Text, useTheme, TextInput, Button, RadioButton, TouchableRipple} from 'react-native-paper';
import { DatePickerModal } from 'react-native-paper-dates';

const DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} accessible={false}>
        {children}
    </TouchableWithoutFeedback>
)

const AddPage = () => {
    const theme = useTheme()

    const [amount, setAmount] = useState(''); 
    const [date, setDate] = useState(undefined); 
    const [open, setOpen] = useState(false);
    const [checked, setChecked] = useState('normal-ios');
    const onDismissSingle = useCallback(() => {
        setOpen(false);
    }, [setOpen]);

    const onConfirmSingle = useCallback(
        (params) => {
            setOpen(false);
            setDate(params.date)},
        [setOpen, setDate]);

    const handleChange = (text) => { 
        console.log(text)
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
        <DismissKeyboard>
            <View style={styles().container}>
                <TextInput
                    textColor={theme.colors.surface}
                    style={styles().textInput}
                    label="Amount"
                    onChangeText={setAmount}
                    onEndEditing={(e) => handleChange(e.nativeEvent.text)}
                    value={amount} 
                    keyboardType="numbers-and-punctuation"
                    placeholder="Type something"
                /> 
                <Button onPress={() => setOpen(true)} uppercase={false} mode="outlined">
                    Pick single date
                </Button>
                <DatePickerModal
                    locale="en"
                    mode="single"
                    visible={open}
                    onDismiss={onDismissSingle}
                    date={date}
                    onConfirm={onConfirmSingle}
                />
                <TouchableRipple onPress={() => setChecked('normal-ios')}>
                    <View style={styles.row}>
                    <Text>Normal 2 - IOS</Text>
                    <View pointerEvents="none">
                        <RadioButton.IOS
                        value="normal-ios"
                        status={checked === 'normal-ios' ? 'checked' : 'unchecked'}
                        />
                    </View>
                    </View>
                </TouchableRipple>
            </View>  
        </DismissKeyboard>
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
        textInput: {
            width: 150,
            height: 50
        }
    });
}

export default AddPage;
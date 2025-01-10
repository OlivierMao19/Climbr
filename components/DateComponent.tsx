import React, { useState } from 'react';
import { View, TextInput, Platform, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DateComponent = ({ date, setDate, otherStyles, title }) => {
    const [show, setShow] = useState(false);
    const [mode, setMode] = useState('date');

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <Text className="text-base text-gray-100 font-pmedium pl-1 mb-1">{title}</Text>
            <View className="border-2 border-black-200 w-full h-16 px-4 mb-3 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row">
                <TextInput
                    className="flex-1 text-white font-psemibold text-base"
                    onFocus={showDatepicker}
                    showSoftInputOnFocus={false}
                    value={date.toLocaleDateString()}
                />
                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                        onBlur={() => setShow(false)}
                    />
                )}
            </View>
        </View>
    );
};

export default DateComponent;
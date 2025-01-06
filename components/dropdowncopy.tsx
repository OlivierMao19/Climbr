import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SelectCountry } from 'react-native-element-dropdown';

const local_data = [
    {
        value: null,
        lable: 'No filter',
    },
    {
        value: '1',
        lable: 'Slabs',
    },
    {
        value: '2',
        lable: 'Overhangs',
    },
    {
        value: '3',
        lable: 'Normal',
    },
    {
        value: '4',
        lable: 'V1',
    },
    {
        value: '5',
        lable: 'V2',
    },
    {
        value: '6',
        lable: 'V3',
    },
    {
        value: '7',
        lable: 'V4',
    },
    {
        value: '8',
        lable: 'V5',
    },
    {
        value: '9',
        lable: 'V6',
    },
    {
        value: '10',
        lable: 'V7',
    },
    {
        value: '11',
        lable: 'V8',
    },
    {
        value: '12',
        lable: 'V9',
    },
];

const Dropdown = _props => {
    const [country, setCountry] = useState(null);

    return (
        <SelectCountry
            style={styles.dropdown}
            selectedTextStyle={styles.selectedTextStyle}
            placeholderStyle={styles.placeholderStyle}
            maxHeight={200}
            value={country}
            data={local_data}
            valueField="value"
            labelField="lable"
            placeholder="Filter by"
            onChange={e => {
                setCountry(e.value);
            }}
        />
    );
};

export default Dropdown;

const styles = StyleSheet.create({
    dropdown: {
        height: 50,
        width: 100,
        backgroundColor: '#2A2A3A',
        borderRadius: 22,
        paddingHorizontal: 8,
    },
    placeholderStyle: {
        fontSize: 16,
        color: '#CDCDE0',
    },
    selectedTextStyle: {
        fontSize: 16,
        color: '#CDCDE0',
        textAlign: 'left',
    },

});
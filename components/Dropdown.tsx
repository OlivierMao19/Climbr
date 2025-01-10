import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SelectCountry } from 'react-native-element-dropdown';

const local_data = [
  { value: 'null', label: 'No filter' },
  { value: 'Slabs', label: 'Slabs' },
  { value: 'Overhangs', label: 'Overhangs' },
  { value: 'Normal', label: 'Normal' },
  { value: 1, label: 'V1' },
  { value: 2, label: 'V2' },
  { value: 3, label: 'V3' },
  { value: 4, label: 'V4' },
  { value: 5, label: 'V5' },
  { value: 6, label: 'V6' },
  { value: 7, label: 'V7' },
  { value: 8, label: 'V8' },
  { value: 9, label: 'V9' },
  { value: 10, label: 'V10' },
  { value: 11, label: 'V11' },
  { value: 12, label: 'V12' },
  { value: 13, label: 'V13' },
];

const Dropdown = ({ setFilterAttribute }) => {
  const [country, setCountry] = useState(null);

  return (
    <SelectCountry
      style={styles.dropdown}
      containerStyle={styles.containerStyle}
      selectedTextStyle={styles.selectedTextStyle}
      placeholderStyle={styles.placeholderStyle}
      maxHeight={200}
      value={country}
      data={local_data}
      valueField="value"
      labelField="label"
      placeholder="Filter by"
      onChange={e => {
        setCountry(e.value);
        setFilterAttribute(e.value);
      }}
    />
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    width: 110,
    backgroundColor: '#2A2A3A',
    borderRadius: 22,
    paddingHorizontal: 8,
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#CDCDE0',
    backgroundColor: '#2A2A3A',
  },
  selectedTextStyle: {
    fontSize: 14,
    color: '#CDCDE0',
    textAlign: 'center',
    marginLeft: -14,
  },
  containerStyle: {
    backgroundColor: '#2A2A3A',
    borderColor: '#2A2A3A',
    borderRadius: 14,
  },
});
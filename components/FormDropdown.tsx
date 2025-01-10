import { SelectCountry } from 'react-native-element-dropdown';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const FieldDropdown = ({ setAttribute, options, title, value, placeholder, otherStyles }) => {
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium pl-1 mb-1">{title}</Text>

      <SelectCountry
        style={styles.dropdown}
        containerStyle={styles.containerStyle}
        selectedTextStyle={styles.selectedTextStyle}
        placeholderStyle={styles.placeholderStyle}
        maxHeight={200}
        value={value}
        data={options}
        valueField="value"
        labelField="label"
        placeholder={placeholder}
        onChange={(e) => setAttribute(e.value)}
        fontFamily={'Poppins-Medium'}
        activeColor='#3A7BD5'
      />

    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    height: 48,
    width: '100%',
    backgroundColor: '#2A2A3A',
    paddingHorizontal: 16,
    marginBottom: 12,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 22,
  },
  placeholderStyle: {
    fontSize: 13,
    backgroundColor: '#2A2A3A',
    color: '#CDCDE0',
    textAlign: 'center',
    flexDirection: 'row',
  },
  selectedTextStyle: {
    fontSize: 13,
    color: '#CDCDE0',
    textAlign: 'center',
  },
  containerStyle: {
    backgroundColor: '#2A2A3A',
    borderColor: '#2A2A3A',
    borderRadius: 14,
    overflow: 'hidden',
  },
});

export default FieldDropdown
import { SelectCountry } from 'react-native-element-dropdown';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const FieldDropdown = ({ setAttribute, options, title, value, placeholder, otherStyles }) => {

  return (
    <View className={`space-y-2 ${otherStyles}`}>
        <Text className="text-base text-gray-100 font-pmedium pl-1 mb-1">{title}</Text>
        <View className="border-2 border-black-200 w-full h-12 px-4 mb-3 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row">
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
            />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    height: 48,
    width: '100%',
    backgroundColor: '#1E1E2D',
    paddingHorizontal: 16,
    marginBottom: 12,
    alignItems: 'center',
    flexDirection: 'row',
  },
  placeholderStyle: {
    fontSize: 14,
    backgroundColor: '#1E1E2D',
    color: '#CDCDE0',
    textAlign: 'center',
    flexDirection: 'row',
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

export default FieldDropdown;
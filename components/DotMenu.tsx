import { Icon } from 'react-native-elements';
import { Menu, MenuTrigger, MenuOptions, MenuOption } from 'react-native-popup-menu';
import { View, Text } from 'react-native';
import React from 'react'

const DotMenu = () => {
    return (
        <View>
            <Menu>
                <MenuTrigger>
                    <Icon
                        name={'dots-three-vertical'}
                        type={'entypo'}
                        size={20}
                        color='#FFF'
                    />
                </MenuTrigger>
                <MenuOptions customStyles={{ optionsContainer: { backgroundColor: '#2A2A3A', width: 'auto', padding: 8 } }}>
                    <MenuOption onSelect={() => alert('Climb has been deleted!')}>
                        <Text style={{ color: 'red', fontSize: 16 }}>Delete</Text>
                    </MenuOption>
                </MenuOptions>
            </Menu>
        </View>
    )
}

export default DotMenu;



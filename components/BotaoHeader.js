import React from 'react';
import {Platform} from 'react-native';
import {HeaderButton} from 'react-navigation-header-buttons';
import {Ionicons} from '@expo/vector-icons';
import Theme from '../constantes/Tema';

const BotaoHeader = (props) => {
    return (
        <HeaderButton
        {...props}
        IconComponent={Ionicons}
        iconSize={23}
        color={Platform.OS === 'android' ? 'black' : Theme.primary}
    />
    )









}

export default BotaoHeader;
import React from 'react';
import Tema from '../constantes/Tema';
import {Platform} from 'react-native';
import {HeaderButton} from 'react-navigation-header-buttons';
import {Ionicons} from '@expo/vector-icons';

const BotaoHeader = (props) => {
    return (
        <HeaderButton
        {...props}
        IconComponent={Ionicons}
        iconSize={23}
        color={Platform.OS === 'android' ? 'black' : Tema.primary}
    />
    )
}

export default BotaoHeader;
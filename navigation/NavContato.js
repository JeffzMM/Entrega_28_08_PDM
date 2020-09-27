import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ListaDeContatos from "../telas/ListaDeContatos";
import CadastroDeContatos from "../telas/CadastroDeContatos";
import { Platform } from "react-native";
import Tema from '../constantes/Tema';

const NavContato = createStackNavigator({
    ListaContato: ListaDeContatos,
    NovoContato: CadastroDeContatos,
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backGroundColor: Platform.OS === 'android' ? Tema.primary : 'white',
        },
        headerTitleStyle: { alignSelf: 'center' },
        headerTintColor: Platform.OS === 'android' ? 'white' : Tema.primary
    }
});

export default createAppContainer (NavContato);
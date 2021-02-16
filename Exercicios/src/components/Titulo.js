import React, {Fragment} from 'react'//Fragment é utilizado para retorna mais de um elemento
import {View, Text} from 'react-native'
import Estilo from './estilo'

export default props =>{
    
        <Fragment>
            <Text style={Estilo.txtG}>{props.principal}</Text>
            <Text>{props.secundario}</Text>
        </Fragment>
}
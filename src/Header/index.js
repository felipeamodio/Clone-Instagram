import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Header(){
    return(
        <View style={styles.header}>
            <TouchableOpacity>
                <Image 
                    source={require('../img/logo.png')}
                    style={styles.logo}
                />
            </TouchableOpacity>
            
            <View style={styles.btnIcons}>
            <TouchableOpacity>
                <FontAwesome name="plus-square-o" size={24} color="black" style={styles.plus} />
            </TouchableOpacity>

            <TouchableOpacity>
                <AntDesign name="hearto" size={24} color="black" style={styles.heart} />
            </TouchableOpacity>

            <TouchableOpacity>
                <AntDesign name="message1" size={24} color="black" style={styles.message} />
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 55,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 45,
        borderBottomWidth: 0.2,
        shadowColor: '#000000',
        elevation: 1
    },
    send: {
        width: 23,
        height: 23
    },
    btnIcons: {
        flexDirection: 'row',
    },
    plus: {
        paddingRight: 14
    },
    heart: {
        paddingRight: 14
    }
})
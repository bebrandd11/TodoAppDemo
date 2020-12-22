import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {
    HEIGHT,
    COLORS,
    WIDTH,
    FONTS,
    FONT_MEASURMENT,
} from '../helper/Constants';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Header() {
    const navigation = useNavigation();
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.arrowBtn} onPress={() => navigation.goBack()}>
                <Feather name="arrow-left" size={30} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.title}>My Todos</Text>
            <View style={styles.view}/>
        </View>

    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: 'coral',
        flexDirection: 'row',
        // justifyContent: 'center',
    },
    arrowBtn: {
        flex: 1,
        paddingLeft: 20,
    },
    title: {
        flex: 1,
        textAlign: 'center',
        color: COLORS.WHITE,
        fontSize: FONT_MEASURMENT.large,
        fontWeight: 'bold',
    },
    view: {
        flex: 1,
    },
});

import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import {
    HEIGHT,
    COLORS,
    WIDTH,
    FONTS,
    FONT_MEASURMENT,
} from '../helper/Constants';

export default function AddTodo({ submitHandler }) {
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    return (
        <View>
            <TextInput
                style={styles.input} 
                placeholder='new todo...'
                onChangeText={changeHandler}
            />
            <TouchableOpacity style={styles.addBtn} onPress={() => submitHandler(text)}>
                <Text style={styles.btnText}>ADD TODO</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    addBtn: {
        backgroundColor: 'coral',
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 2,
    },
    btnText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: FONT_MEASURMENT.medium,
    },
});

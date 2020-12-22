import React, { useState } from 'react'
import { View, Text, ImageBackground, ScrollView, TouchableOpacity, FlatList, Image } from 'react-native'

// Relative path
import { styles } from './styles';

export default function Flatlists() {
    const [people, setPeople] = useState([
        { name: 'shaun', key: '1' },
        { name: 'yoshi', key: '2' },
        { name: 'mario', key: '3' },
        { name: 'luigi', key: '4' },
        { name: 'peach', key: '5' },
        { name: 'toad', key: '6' },
        { name: 'bowser', key: '7' },
    ])
    return (
        <View style={styles.container}>

            <FlatList
                data={people}
                keyExtractor={(item) => item.id}
                numColumns={1}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity style={styles.mainView}>
                            <Image style={styles.imageView} source={(require('../../../assets/vitor.jpg'))}/>
                            <Text style={styles.imgText}>{item.name}</Text>
                        </TouchableOpacity>
                    );
                }}
            />

        </View>
    )
}

import React, { useState } from 'react'
import { View, Text, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

// Relative path
import { styles } from './styles';  

export default function Lists() {
    const navigation = useNavigation();

    const [ people, setPeople ] = useState([
        {name: 'Flatlist', key: '1'},
        {name: 'Todo', key: '2'},
        {name: 'mario', key: '3'},
        {name: 'luigi', key: '4'},
        {name: 'peach', key: '5'},
        {name: 'toad', key: '6'},
        {name: 'bowser', key: '7'},
    ]);

    const pressHandler = (key,name) => {
        console.log("name",name)
        // const statkey = people.map((ele)=>ele.key)
        // console.log("key",statkey)
        navigation.navigate(name)
        // console.log(key);
    }

    return (
        <View style={styles.container}>
            <ImageBackground 
                style={styles.imageView}
                source={require('../../../assets/yes.jpg')}
            >
                <ScrollView>
                {people.map((item) => (
                    <TouchableOpacity style={styles.textView} onPress={() => pressHandler(item.key,item.name)}>
                        <Text style={styles.textStyle}>{item.name}</Text>
                    </TouchableOpacity>
                ))}
                </ScrollView>
            </ImageBackground>
        </View>
    )
}

import React, {useState} from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';

// Relative path
import { styles } from './styles';  
import { FontAwesome } from '@expo/vector-icons';


export default function Login() {
    const navigation = useNavigation();
    
    const [name, setName] = useState('shaan');
    const [age, setAge] = useState('30')

    const checkTextInput = () => {
        if (name === '') {
            alert('Please Enter Name');          
        } else if (age === '') {
            alert('Please Enter Age');
        } else {
           navigation.navigate('Lists');
        }
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.inputView}>
                <FontAwesome name="user" size={30} />
                <TextInput 
                  keyboardType="default"
                  style={styles.textInput}
                  placeholder="enter the name"
                  onChangeText={(val) => setName(val)}
                />
            </View>
            <View style={styles.inputView}>
                <FontAwesome name="user" size={30} />
                <TextInput 
                  keyboardType="numeric"
                  style={styles.textInput}
                  placeholder="enter the Age"
                  onChangeText={(val) => setAge(val)}
                />
            </View>
            <View style={styles.inputView}>
                <FontAwesome name="lock" size={30} />
                <TextInput 
                  secureTextEntry={true}
                  keyboardType="default"
                  style={styles.textInput}
                  placeholder="enter the Password"
                />
            </View>
            <View style={styles.textView}>
                <Text>name: {name}, age: {age}</Text>
            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={checkTextInput}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

// onPress={() => {navigation.navigate('Lists')}}
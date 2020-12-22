
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Demo() {
  const [name, setName] = useState({name: 'john doe', name1: 'doe', name2: 'rolls'});
  // const [name1, setName1] = useState('den')
  // const [name2, setName2] = useState('rolls')

  const [person, setPerson] = useState({name: 'mario', age: 40})
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Open up App.js to start working on your app!</Text>
      </View>
      <View style={styles.body}>
        <Text>Text 1 {name.name}</Text>
        <Text>Text 2 {name.name1}</Text>
        <Text>Text 3 {name.name2}</Text>
      </View>
      <View>
        <Text>His name is {person.name} and his age is {person.age}</Text>
      </View>
      <TouchableOpacity style={styles.btn} onPress={ () => 
        {
          setName({name: 'chun-li', name1: 'sten', name2: 'brad'}),
          setPerson({name: 'leo', age: '25'})
        }}>
        <Text>update state</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'pink',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  body: {
    backgroundColor: 'yellow',
    padding: 20,
    marginTop: 10,
  },
  btn: {
    backgroundColor: '#30A9DE',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 10,
  },
});

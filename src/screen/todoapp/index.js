import React, { useState } from 'react'
import { View, Text, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { useNavigation } from '@react-navigation/native';

// Relative path
import { styles } from './styles';
import Header from '../../components/header';
import TodoItem from '../../components/todoItem';
import AddTodo from '../../components/addTodo';

export default function TodoApp() {
    const navigation = useNavigation();

    const [todos, setTodos] = useState([
        { text: 'buy coffee', key: '1' },
        { text: 'create an app', key: '2' },
        { text: 'play on the switch', key: '3' },
    ]);

    const renderMainView = () => {
        return (
            <TouchableWithoutFeedback onPress={() => {
                Keyboard.dismiss();
            }}>
                <View style={styles.container}>
                    {renderComponants()}
                </View>
            </TouchableWithoutFeedback>
        )
    }

    /*
    .##........#######...######...####..######...######.
    .##.......##.....##.##....##...##..##....##.##....##
    .##.......##.....##.##.........##..##.......##......
    .##.......##.....##.##...####..##..##........######.
    .##.......##.....##.##....##...##..##.............##
    .##.......##.....##.##....##...##..##....##.##....##
    .########..#######...######...####..######...######.
    */

    const pressHandler = (key) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.key != key);
        });
    }

    const submitHandler = (text) => {
        if (text.length > 3) {
            setTodos((prevTodos) => {
                return [
                    { text: text, key: Math.random().toString() },
                    ...prevTodos
                ];
            });
        } else {
            alert('OOPS! , Todos must be over 3 chars long', [
                { text: 'Understood', onPress: () => console.log('alert closed') }
            ]);
        }
    }

    /*
    ..######...#######..##.....##.########...#######..##....##.########.##....##.########..######.
    .##....##.##.....##.###...###.##.....##.##.....##.###...##.##.......###...##....##....##....##
    .##.......##.....##.####.####.##.....##.##.....##.####..##.##.......####..##....##....##......
    .##.......##.....##.##.###.##.########..##.....##.##.##.##.######...##.##.##....##.....######.
    .##.......##.....##.##.....##.##........##.....##.##..####.##.......##..####....##..........##
    .##....##.##.....##.##.....##.##........##.....##.##...###.##.......##...###....##....##....##
    ..######...#######..##.....##.##.........#######..##....##.########.##....##....##.....######.
    */

    const renderComponants = () => {
        return (
            <View style={styles.secView}>
                <Header />
                <View style={styles.content}>
                    {/* to form */}
                    <View style={styles.list}>
                        <AddTodo submitHandler={submitHandler} />
                        <FlatList
                            data={todos}
                            renderItem={({ item, index }) => {
                                return (
                                    <TodoItem item={item} pressHandler={pressHandler} />
                                );
                            }}
                        />
                    </View>
                </View>
            </View>
        )
    }

    return (
        renderMainView()
    );
}

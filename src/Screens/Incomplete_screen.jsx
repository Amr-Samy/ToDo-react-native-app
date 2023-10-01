import { View, Text, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { styles } from '../../styles';
import Todo from '../components/Todo';


const IncompletedTodos = () => {
    const [doneTodos, setDoneTodos] = useState([]);
    const { todoList } = useSelector(state => state.todo);

    useEffect(() => {
        if (todoList) {
            const filteredTodos = todoList.filter(res => !res.isDone);
            setDoneTodos(filteredTodos);
        }
    }, [todoList]);

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/todo3.png')} style={{ width: 100, height: 100 }} />
            {
                doneTodos.length ? (
                    <FlatList
                        data={doneTodos}
                        renderItem={({ item }) => <Todo todo={item} key={item.id} />}
                        keyExtractor={item => item.id}
                    />
                ) : <Text style={styles.text}>All Done!</Text>
            }

        </View>
    )
}

export default IncompletedTodos
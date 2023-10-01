import { View, Text, Image, SafeAreaView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { styles } from '../../styles';
import Todo from '../components/Todo';


const CompletedTodos = () => {
    const [doneTodos, setDoneTodos] = useState([]);
    const { todoList } = useSelector(state => state.todo);

    useEffect(() => {
        if (todoList) {
            const filteredTodos = todoList.filter(res => res.isDone);
            setDoneTodos(filteredTodos);
        }
    }, [todoList]);

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/todo2.png')} style={{ width: 100, height: 100, marginBottom: 10 }} />
            {
                doneTodos.length ? (
                    <FlatList
                        data={doneTodos}
                        renderItem={({ item }) => <Todo todo={item} key={item.id} />}
                        keyExtractor={item => item.id}
                    />
                ) : <Text style={styles.text}>You have not done any thing yet!</Text>
            }

        </View>
    )
}

export default CompletedTodos
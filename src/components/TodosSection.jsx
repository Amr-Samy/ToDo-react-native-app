import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import Todo from './Todo';
import { useSelector } from 'react-redux';

const Todos = ({ }) => {
    const { todoList } = useSelector((state) => state.todo);

    return (
        <FlatList
            data={todoList}
            renderItem={({ item }) => <Todo todo={item} key={item.id} />}
            keyExtractor={item => item.id}
            style={{ flex: 1, marginBottom: 40 }}
        />
    )
}

export default Todos;
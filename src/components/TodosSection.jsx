import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Todo from './Todo';

const Todos = ({ todoList, removeHandel }) => {

    return (
        <View>
            {todoList.map(todo => (
                <Todo todo={todo} key={todo.id} removeHandel={removeHandel} />
            ))}
        </View>
    )
}

export default Todos;
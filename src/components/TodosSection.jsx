import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Todo from './Todo';

const Todos = ({ todoList }) => {
    return (
        <ScrollView>
            {todoList.map(todo => (
                <Todo todo={todo} key={todo.id} />
            ))}
        </ScrollView>
    )
}

export default Todos;
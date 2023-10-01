import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import Todo from './Todo';

const Todos = ({ todoList, removeHandel }) => {

    return (
        <SafeAreaView>

            <FlatList
                data={todoList}
                renderItem={({ item }) => <Todo todo={item} key={item.id} removeHandel={removeHandel} />}
                keyExtractor={item => item.id}
                contentContainerStyle={{ flexGrow: 1 }}
            />

        </SafeAreaView>
    )
}

export default Todos;
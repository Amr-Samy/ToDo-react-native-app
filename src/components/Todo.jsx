import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { styles } from "../../styles";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodoStatus } from "../Redux/slices/Todo.sclice";

const Todo = ({ todo }) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    return (
        <View style={{}}>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Todo-details', todo)}
                style={styles.todo}
            >
                <Ionicons
                    name={todo.isDone ? "checkmark-done-circle" : "checkmark-done-circle-outline"}
                    color={"#6F35A5"} size={25}
                    onPress={() => dispatch(toggleTodoStatus({ id: todo.id }))}
                ></Ionicons>
                <Text style={{ color: '#fff', flex: 4 }}>{todo.title}</Text>
                <Ionicons
                    name="trash-outline"
                    color={"#6F35A5"} size={25}
                    onPress={() => dispatch(removeTodo({ id: todo.id }))}
                />
            </TouchableOpacity>
        </View>
    );
};

export default Todo;

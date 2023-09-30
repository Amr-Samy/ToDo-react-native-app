import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../../styles";

const Todo = ({ todo }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Todo-details', todo)}
            style={styles.todo}
        >
            <Text style={{ color: '#fff' }}>{todo.title}</Text>
        </TouchableOpacity>
    );
};

export default Todo;
